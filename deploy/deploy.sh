#!/bin/bash
# restraddle deploy, run on Hillsboro. GitHub Actions calls /root/deploy-restraddle.sh, a
# short wrapper that updates /root/restraddle-build and runs this file, so the deploy steps
# live in git (source of the wrapper: deploy/deploy-wrapper.sh).
# Runtime settings, if any: /root/secrets/restraddle.env (compose env_file).
# Never add --build-arg or -e with a secret value.
set -euo pipefail
cd /root/restraddle-build

docker build -t restraddle:latest .

cd /root
docker compose up -d --no-deps restraddle-app
