# Portfolio Frontend (React + Vite)

Minimalist dark-mode portfolio matching the **Minimalist Portfolio Redesign Series** design.

## Features

- Tech stack marquee bar (Node.js · Go · PostgreSQL · …)
- **Featured Deployments** section with project card grid
- Fetches data from the Go API (`/api/projects`, `/api/tech-stack`)
- Mobile-first responsive layout
- Fallback data when API is unavailable

## Run locally

**Prerequisites:** Node 18+, Go API running on port 8080 (see `backend/README.md`).

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**. Vite proxies `/api` requests to the Go backend.

## Environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | _(empty)_ | Production API URL. Leave empty in dev to use Vite proxy. |

## Customize your portfolio

| File | What to change |
|------|----------------|
| `src/components/Header/Header.jsx` | Name, bio, contact email, GitHub link |
| `src/components/Footer/Footer.jsx` | Social links, copyright name |
| `src/components/FeaturedDeployments/FeaturedDeployments.jsx` | Archive link, section copy |
| `public/images/projects/` | Replace SVG placeholders with real project screenshots |
| `backend/internal/data/store.go` | Project data (title, tags, descriptions, featured flag) |

## Build for production

```bash
npm run build
npm run preview
```

Static output is in `dist/`.
