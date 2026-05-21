#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/opt/vibeopus}"

install -d "$APP_DIR/backend" "$APP_DIR/frontend" "$APP_DIR/logs"
cp ./dist/new-api "$APP_DIR/backend/new-api"
cp -r ./web/default/dist/* "$APP_DIR/frontend/"
cp ./deploy/systemd/new-api.service /etc/systemd/system/new-api.service
cp ./deploy/nginx/vibeopus.conf /etc/nginx/conf.d/vibeopus.conf

systemctl daemon-reload
systemctl enable --now new-api
nginx -t
systemctl reload nginx
