#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/opt/vibeopus}"
cp ./dist/new-api "$APP_DIR/backend/new-api"
systemctl restart new-api
