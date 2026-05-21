#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/opt/vibeopus}"
cp -r ./web/default/dist/* "$APP_DIR/frontend/"
systemctl reload nginx
