#!/usr/bin/env bash
set -euo pipefail

HOST="${DEPLOY_HOST:?Set DEPLOY_HOST to the SSH target, for example username@example.com}"
REMOTE_USER="${REMOTE_USER:-${HOST%%@*}}"
if [[ "$REMOTE_USER" == "$HOST" ]]; then
  echo "Set DEPLOY_HOST as username@example.com or set REMOTE_USER." >&2
  exit 1
fi
REMOTE_ROOT="${REMOTE_ROOT:-/var/www/mohammadi.com}"
DOMAIN="${DOMAIN:-mohammadi.com}"
WWW_DOMAIN="${WWW_DOMAIN:-www.mohammadi.com}"
RELEASE="$(date -u +%Y%m%d%H%M%S)"

npm run build

ssh "$HOST" "set -euo pipefail
  sudo mkdir -p '$REMOTE_ROOT/releases'
  sudo chown -R '$REMOTE_USER:$REMOTE_USER' '$REMOTE_ROOT'
"

rsync -az --delete dist/ "$HOST:$REMOTE_ROOT/releases/$RELEASE/"

ssh "$HOST" "set -euo pipefail
  ln -sfn '$REMOTE_ROOT/releases/$RELEASE' '$REMOTE_ROOT/current'
  find '$REMOTE_ROOT/releases' -maxdepth 1 -mindepth 1 -type d | sort | head -n -5 | xargs -r rm -rf
  if command -v nginx >/dev/null 2>&1; then
    sudo tee /etc/nginx/sites-available/mohammadi.com >/dev/null <<'NGINX'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name mohammadi.com www.mohammadi.com;

    root /var/www/mohammadi.com/current;
    index index.html;

    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy strict-origin-when-cross-origin;
    add_header X-Frame-Options SAMEORIGIN;

    location / {
        try_files \$uri \$uri/ =404;
    }

    location ~* \.(?:css|js|jpg|jpeg|gif|png|svg|ico|webp|avif|woff2?)$ {
        expires 30d;
        add_header Cache-Control \"public, max-age=2592000, immutable\";
        try_files \$uri =404;
    }
}
NGINX
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo ln -sfn /etc/nginx/sites-available/mohammadi.com /etc/nginx/sites-enabled/mohammadi.com
    sudo nginx -t
    sudo systemctl reload nginx
  fi
"

echo "Deployed $DOMAIN and $WWW_DOMAIN release $RELEASE to $HOST:$REMOTE_ROOT/current"
