FRONTEND_DIR = ./web/default
FRONTEND_CLASSIC_DIR = ./web/classic
BACKEND_DIR = .

.PHONY: all build-frontend build-frontend-classic build-all-frontends start-backend dev dev-api dev-web dev-web-classic build-lowmem-image pull-lowmem up-lowmem build-backend build-frontend-dist

all: build-all-frontends start-backend

build-frontend:
	@echo "Building default frontend..."
	@cd $(FRONTEND_DIR) && bun install && DISABLE_ESLINT_PLUGIN='true' VITE_REACT_APP_VERSION=$(cat ../../VERSION) bun run build

build-frontend-classic:
	@echo "Building classic frontend..."
	@cd $(FRONTEND_CLASSIC_DIR) && bun install && VITE_REACT_APP_VERSION=$(cat ../../VERSION) bun run build

build-all-frontends: build-frontend build-frontend-classic

start-backend:
	@echo "Starting backend dev server..."
	@cd $(BACKEND_DIR) && go run main.go &

dev-api:
	@echo "Starting backend services (docker)..."
	@docker compose -f docker-compose.dev.yml up -d

dev-web:
	@echo "Starting frontend dev server..."
	@cd $(FRONTEND_DIR) && bun install && bun run dev

dev-web-classic:
	@echo "Starting classic frontend dev server..."
	@cd $(FRONTEND_CLASSIC_DIR) && bun install && bun run dev

dev: dev-api dev-web

build-lowmem-image:
	@echo "Building low-memory deployment image..."
	@docker build -f Dockerfile.lowmem -t new-api-lowmem:local .

build-backend:
	@echo "Building backend binary..."
	@go build -o dist/new-api.exe .

build-frontend-dist:
	@echo "Building default frontend dist..."
	@cd $(FRONTEND_DIR) && bun install && DISABLE_ESLINT_PLUGIN='true' VITE_REACT_APP_VERSION=$(cat ../../VERSION) bun run build

pull-lowmem:
	@echo "Pulling low-memory deployment image..."
	@docker compose -f docker-compose.lowmem.yml pull

up-lowmem:
	@echo "Starting low-memory deployment..."
	@docker compose -f docker-compose.lowmem.yml up -d
