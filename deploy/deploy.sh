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
IFS= read -r TOKEN

printf '%s' "$TOKEN" | docker login ghcr.io -u intensechase --password-stdin >/dev/null
trap 'docker logout ghcr.io >/dev/null 2>&1 || true' EXIT
docker pull -q "$IMG:$SHA"
docker logout ghcr.io >/dev/null

docker tag restraddle:latest restraddle:previous 2>/dev/null || true
docker tag "$IMG:$SHA" restraddle:latest

cd /root
docker compose up -d --no-deps restraddle-app

# Keep only the current registry image on disk (previous stays as restraddle:previous).
docker images "$IMG" --format '{{.Tag}}' | grep -vx "$SHA" | xargs -r -I{} docker rmi "$IMG:{}" >/dev/null 2>&1 || true
