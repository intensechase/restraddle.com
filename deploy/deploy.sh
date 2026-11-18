#!/bin/bash
# restraddle deploy, run on Hillsboro by the GitHub workflow:
#   printf '%s\n' "$GITHUB_TOKEN" | ssh root@host "bash /root/deploy-restraddle.sh <commit sha>"
# GitHub builds the image and pushes it to ghcr.io (private); this script only
# pulls it. The pull token arrives on stdin, is used once, and expires when the
# GitHub run ends; docker logout removes it from the server right after.
# The image that was live is kept as restraddle:previous (for rollback).
set -euo pipefail
SHA=${1:?usage: deploy.sh <commit sha>}
IMG=ghcr.io/intensechase/restraddle
TOKEN=""
[ -t 0 ] || IFS= read -r -t 10 TOKEN || true

# Pull unless this exact image is already here (a re-run of the same commit).
if ! docker image inspect "$IMG:$SHA" >/dev/null 2>&1; then
  printf '%s' "$TOKEN" | docker login ghcr.io -u intensechase --password-stdin >/dev/null
  trap 'docker logout ghcr.io >/dev/null 2>&1 || true' EXIT
  docker pull -q "$IMG:$SHA"
  docker logout ghcr.io >/dev/null
fi

docker tag restraddle:latest restraddle:previous 2>/dev/null || true
docker tag "$IMG:$SHA" restraddle:latest

cd /root
docker compose up -d --no-deps restraddle-app

# Auto-rollback: the site must answer (2xx/3xx through the local web router)
# within ~60 s, or the previous image goes back live and the deploy fails
# (the GitHub run turns red and GitHub emails the owner).
# Test the rollback path on the server: DEPLOY_TEST_FAIL=1 bash deploy/deploy.sh <sha> </dev/null
HOST=restraddle.com
healthy() {
  [ "${DEPLOY_TEST_FAIL:-}" = 1 ] && return 1
  local code
  for _ in $(seq 1 12); do
    code=$(curl -s -o /dev/null -m 10 -w '%{http_code}' --resolve "$HOST:443:127.0.0.1" "https://$HOST/" || true)
    case "$code" in 2??|3??) return 0;; esac
    sleep 5
  done
  echo "health check failed (last HTTP $code)"; return 1
}
if healthy; then
  echo "restraddle: new version healthy"
else
  if docker image inspect restraddle:previous >/dev/null 2>&1; then
    docker tag restraddle:previous restraddle:latest
    docker compose up -d --no-deps restraddle-app
    unset DEPLOY_TEST_FAIL
    healthy && echo "ROLLED BACK: previous version is live again" || echo "ROLLED BACK, but the previous version is not answering either"
  else
    echo "no previous image to roll back to"
  fi
  exit 1
fi

# Keep only the current registry image on disk (previous stays as restraddle:previous).
docker images "$IMG" --format '{{.Tag}}' | grep -vx "$SHA" | xargs -r -I{} docker rmi "$IMG:{}" >/dev/null 2>&1 || true
