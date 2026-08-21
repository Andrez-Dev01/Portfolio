# Portfolio API (Go)

REST API that powers the minimalist "Featured Deployments" portfolio frontend.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | Featured projects + archive link |
| GET | `/api/tech-stack` | Tech bar items |
| GET | `/api/profile` | Hero/about/contact metadata |

## Run locally

```bash
cd backend
go run ./cmd/server
```

Server defaults to `http://localhost:8080`.

## Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `8080` | HTTP listen port |
| `CORS_ORIGINS` | `http://localhost:5173,...` | Comma-separated allowed frontend origins |

## Customize your portfolio

Edit `internal/data/portfolio.go`:

- Project titles, descriptions, images, tags, and URLs
- Tech stack list in the top bar
- Archive link (`View Archive →`)
- Profile name, bio, email, and social links

## Tests

```bash
cd backend
go test ./...
```
