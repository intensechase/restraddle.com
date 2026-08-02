#!/bin/bash
docker stop restraddle-app 2>/dev/null
docker rm restraddle-app 2>/dev/null
docker run -d \
  --name restraddle-app \
  --network coolify \
  --restart unless-stopped \
  -e NODE_ENV=production \
  -e HOSTNAME=0.0.0.0 \
  -l traefik.enable=true \
  -l traefik.http.middlewares.rs-https-redirect.redirectscheme.scheme=https \
  -l traefik.http.middlewares.rs-https-redirect.redirectscheme.permanent=true \
  -l 'traefik.http.routers.rs-http.rule=Host(`restraddle.com`) || Host(`www.restraddle.com`)' \
  -l traefik.http.routers.rs-http.entrypoints=http \
  -l traefik.http.routers.rs-http.middlewares=rs-https-redirect \
  -l 'traefik.http.routers.rs-https.rule=Host(`restraddle.com`) || Host(`www.restraddle.com`)' \
  -l traefik.http.routers.rs-https.entrypoints=https \
  -l traefik.http.routers.rs-https.tls=true \
  -l traefik.http.routers.rs-https.tls.certresolver=letsencrypt \
  -l traefik.http.services.rs.loadbalancer.server.port=3000 \
  restraddle:latest
echo "EXIT: $?"
