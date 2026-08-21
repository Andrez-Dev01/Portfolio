# Portfolio Frontend (React)

Dark minimalist "Featured Deployments" portfolio built with React + TypeScript + Vite.

## Design

Matches the **Minimalist Portfolio Redesign** reference:

- Near-black background with high-contrast typography
- Tech stack bar (`Node.js • Go • PostgreSQL • …`)
- **Featured Deployments** grid with image cards and tag pills
- Responsive layout (single column mobile, two columns desktop)

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

The UI loads fallback seed data if the Go API is offline. Start the backend for live data:

```bash
cd ../backend && go run ./cmd/server
```

## Environment

Copy `.env.example` to `.env` and adjust:

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | Go API base URL (default `http://localhost:8080`) |

## Customize your portfolio

| Location | What to change |
|----------|----------------|
| `src/data/fallback.ts` | Local preview data (keep in sync with backend until integrated) |
| `public/images/projects/` | Project hero screenshots |
| `public/images/logo.png` | Your logo/mark |
| `src/index.css` | Color palette CSS variables |
| `index.html` | Page title + meta description |
| `src/components/*` | Look for `CUSTOMIZE` comments in component files |

When the backend PR is merged, prefer editing `backend/internal/data/portfolio.go` as the source of truth.

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Oxlint
```

## Project structure

```
src/
  components/     UI sections (Header, TechBar, FeaturedProjects, …)
  data/           Fallback seed data
  hooks/          Data fetching hooks
  services/       API client
  types/          Shared TypeScript types
public/
  images/         Static assets (logo, project screenshots)
```
