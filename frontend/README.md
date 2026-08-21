# Portfolio Frontend (React + Vite)

React SPA for the minimalist portfolio redesign. Consumes the Go API.

## Prerequisites

- Node.js 18+
- Go backend running on port 8080 (see `backend/README.md`)

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173. Vite proxies `/api` requests to the backend.

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | _(empty)_ | Production API base URL |

## Project structure

```
src/
  components/   # UI components (added in featured-deployments branch)
  config/       # Constants and env config
  hooks/        # Data-fetching hooks
  services/     # API client
  styles/       # Global CSS and design tokens
```
