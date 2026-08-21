# Portfolio API (Go)

REST API serving portfolio data for the minimalist redesign frontend.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/portfolio` | Full portfolio payload (profile, skills, projects) |
| GET | `/api/skills` | Tech skill bar items |
| GET | `/api/projects` | Featured deployment cards |

## Run locally

```bash
cd backend
go run .
```

Server defaults to port `8080`. Override with `PORT=3001 go run .`.

## Personalization

Edit `data/portfolio.go` to update:

- Profile name, title, bio, email, archive link
- Skills array (shown in the top tech bar)
- Project cards (title, description, tags, thumbnail, link)
