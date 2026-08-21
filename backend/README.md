# Portfolio API (Go)

REST API that powers the Minimalist Portfolio React frontend.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects |
| GET | `/api/projects?featured=true` | Featured projects only |
| GET | `/api/tech-stack` | Tech stack marquee items |

## Run locally

```bash
cd backend
go run ./cmd/server
```

The server starts on **http://localhost:8080** by default.

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | HTTP listen port |
| `PORTFOLIO_CORS_ORIGIN` | `http://localhost:5173` | Allowed frontend origin for CORS |

## Customize your portfolio

Edit **`internal/data/store.go`** to update:

- Tech stack marquee items
- Project titles, descriptions, tags, and image URLs
- Featured flag (controls homepage grid)
- Project and archive links

## Tests

```bash
go test ./...
```
