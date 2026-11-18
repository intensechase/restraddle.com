#!/bin/bash
# Installed as /root/deploy-restraddle.sh (mode 700). Updates the build checkout,
# then runs the deploy steps from git.
set -euo pipefail
cd /root/restraddle-build
git pull origin main
exec bash deploy/deploy.sh
