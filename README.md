# Portfolio — Featured Deployments Redesign

Minimalist dark-themed developer portfolio with a **React** frontend and **Go** backend.

> Legacy static files (`index.html`, `style.css`, `script.js`) remain at the repo root for reference. The new app lives in `frontend/` and `backend/`.

## Quick start (full stack)

**Terminal 1 — API**

```bash
cd backend
go run ./cmd/server
```

**Terminal 2 — UI**

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Vite proxies `/api` to the Go server on port `8080`.

Or use the Makefile:

```bash
make dev-backend   # terminal 1
make dev-frontend  # terminal 2
```

## Pull requests

This redesign is split across three branches (merge in order or use the integration PR):

| Branch | Purpose |
|--------|---------|
| `cursor/portfolio-go-backend-7c02` | Go REST API |
| `cursor/portfolio-react-frontend-7c02` | React UI |
| `cursor/portfolio-integration-7c02` | Full stack wiring + docs |

Create PRs against `master`:

- https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/portfolio-go-backend-7c02
- https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/portfolio-react-frontend-7c02
- https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/portfolio-integration-7c02

## Customize your portfolio

Primary source of truth: **`backend/internal/data/portfolio.go`**

| What | Where |
|------|-------|
| Projects (title, description, tags, URLs) | `backend/internal/data/portfolio.go` |
| Tech stack bar | `backend/internal/data/portfolio.go` → `DefaultTechStack()` |
| Archive link ("View Archive →") | `backend/internal/data/portfolio.go` → `Archive` |
| Name, bio, email, socials | `backend/internal/data/portfolio.go` → `DefaultProfile()` |
| Project screenshots | `frontend/public/images/projects/` |
| Logo | `frontend/public/images/logo.png` |
| Color palette | `frontend/src/index.css` CSS variables |
| Page title / SEO | `frontend/index.html` |
| Offline fallback preview data | `frontend/src/data/fallback.ts` (keep in sync) |

Search the repo for `CUSTOMIZE` comments for all touch points.

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | Featured projects + archive |
| GET | `/api/tech-stack` | Tech bar items |
| GET | `/api/profile` | Hero/about/contact metadata |

## Environment variables

**Backend** (`backend/`)

| Variable | Default | Purpose |
|----------|---------|---------|
| `PORT` | `8080` | Listen port |
| `CORS_ORIGINS` | `http://localhost:5173,...` | Allowed frontend origins |

**Frontend** (`frontend/.env`)

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_API_BASE_URL` | _(empty)_ | API base URL; empty uses Vite `/api` proxy |

## Tests

```bash
# Backend
cd backend && go test ./...

# Frontend build
cd frontend && npm run build && npm run lint
```

## Deployment notes

- Build frontend: `cd frontend && npm run build` → serve `frontend/dist`
- Run API binary: `cd backend && go build -o bin/server ./cmd/server`
- Point reverse proxy so `/api` routes to Go and static assets to Vite build output
- Set `CORS_ORIGINS` and `VITE_API_BASE_URL` for production domains

## Stitch design reference

The Stitch MCP server had no design tools available in this environment. The UI follows the **Minimalist Portfolio Redesign** brief: dark near-black canvas, tech bar, "Featured Deployments" heading, two-column project cards with tag pills, and "View Archive →" link.
