# Portfolio — Minimalist Redesign

Full-stack portfolio with a **React** frontend and **Go** backend, matching the Minimalist Portfolio Redesign Series (dark mode, tech stack marquee, featured deployments grid).

## Quick start (local development)

Open two terminals:

**Terminal 1 — Go API**

```bash
cd backend
go run ./cmd/server
```

API runs at **http://localhost:8080**

**Terminal 2 — React frontend**

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at **http://localhost:5173** (proxies `/api` to the Go server).

## Project structure

```
backend/          Go REST API (projects, tech stack)
frontend/         React + Vite SPA
docker-compose.yml  Optional containerized setup
index.html        Legacy static site (preserved on master)
```

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | All projects |
| GET | `/api/projects?featured=true` | Featured projects |
| GET | `/api/tech-stack` | Marquee tech stack items |

## Docker (optional)

```bash
docker compose up --build
```

- Frontend: http://localhost:5173  
- Backend: http://localhost:8080  

## Customize your portfolio

See the **Customization checklist** in each PR description, or edit:

| Location | What to personalize |
|----------|---------------------|
| `backend/internal/data/store.go` | Projects, tags, tech stack, links |
| `frontend/src/components/Header/Header.jsx` | Name, bio, contact |
| `frontend/src/components/Footer/Footer.jsx` | Social links |
| `frontend/public/images/projects/` | Project screenshots |
| `frontend/index.html` | Page title and meta description |

## Branches

| Branch | Purpose |
|--------|---------|
| `cursor/portfolio-go-backend-52ab` | Go API only |
| `cursor/portfolio-react-frontend-52ab` | React UI only |
| `cursor/portfolio-integration-52ab` | Combined stack + docker-compose |

Merge the integration branch (or both feature branches) when ready to replace the legacy static site.

## Tests

```bash
cd backend && go test ./...
cd frontend && npm run build
```
