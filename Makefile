.PHONY: dev-backend dev-frontend test-backend test-frontend test

# Start Go API on :8080
dev-backend:
	cd backend && go run ./cmd/server

# Start Vite dev server on :5173 (proxies /api → :8080)
dev-frontend:
	cd frontend && npm run dev

test-backend:
	cd backend && go test ./...

test-frontend:
	cd frontend && npm run build && npm run lint

test: test-backend test-frontend
