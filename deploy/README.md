# VibeOpus Non-Docker Deployment

This repo now supports a pure binary + Nginx + systemd deployment.

## Layout

- Backend binary: `/opt/vibeopus/backend/new-api`
- Frontend static files: `/opt/vibeopus/frontend/`
- Logs: `/opt/vibeopus/logs/`
- systemd unit: `/etc/systemd/system/new-api.service`
- Nginx config: `/etc/nginx/conf.d/vibeopus.conf`

## Build on local machine or CI

```bash
cd web/default
bun install
bun run build

cd ../..
go build -o dist/new-api .
```

## Upload to server

Copy these files/directories to the server:

- `dist/new-api`
- `web/default/dist/`
- `deploy/systemd/new-api.service`
- `deploy/nginx/vibeopus.conf`

## One-time server setup

```bash
sudo mkdir -p /opt/vibeopus/backend /opt/vibeopus/frontend /opt/vibeopus/logs
sudo cp ./dist/new-api /opt/vibeopus/backend/new-api
sudo cp -r ./web/default/dist/* /opt/vibeopus/frontend/
sudo cp ./deploy/systemd/new-api.service /etc/systemd/system/new-api.service
sudo cp ./deploy/nginx/vibeopus.conf /etc/nginx/conf.d/vibeopus.conf
sudo systemctl daemon-reload
sudo systemctl enable new-api
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl restart new-api
```

## Update flow

### Frontend only

```bash
cd web/default
bun install
bun run build
sudo cp -r dist/* /opt/vibeopus/frontend/
sudo systemctl reload nginx
```

### Backend only

```bash
go build -o dist/new-api .
sudo cp dist/new-api /opt/vibeopus/backend/new-api
sudo systemctl restart new-api
```

## Backend environment

The unit file binds backend to `127.0.0.1:3000`.

Required env in `deploy/systemd/new-api.service`:

- `PORT=3000`
- `SQL_DSN=postgresql://root:123456@127.0.0.1:5432/new-api`
- `REDIS_CONN_STRING=redis://:123456@127.0.0.1:6379`

Adjust these if your database or Redis are remote.

## Verification

```bash
systemctl status new-api
ss -ltnp | grep 3000
curl -I http://127.0.0.1/api/status
```

## Rollback

- Restore the previous `dist/new-api`
- Restore the previous `web/default/dist/`
- Restart `new-api`
- Reload `nginx`
