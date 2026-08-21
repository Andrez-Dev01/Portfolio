# Portfolio — Minimalist Dark Mode Redesign

A responsive portfolio built with **React** (frontend) and **Go** (backend API), featuring a minimalist dark-mode design with a Featured Deployments section.

## Architecture

```
├── backend/          # Go REST API serving portfolio data
├── frontend/         # React + Vite SPA
├── legacy/           # Original static HTML portfolio (preserved)
├── docker-compose.yml
└── README.md
```

## Quick Start (Local Development)

### Prerequisites

- Go 1.22+
- Node.js 20+
- npm

### Backend

```bash
cd backend
go run ./cmd/server
# API available at http://localhost:8080/api/portfolio
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# App available at http://localhost:5173
```

### Docker (full stack)

```bash
docker compose up --build
```

## Customization Checklist

Use this checklist to make the portfolio your own:

| Area | File(s) | What to change |
|------|---------|----------------|
| **Your name & title** | `backend/internal/data/portfolio.json` | `owner.name`, `owner.title`, `owner.bio` |
| **Tech stack nav** | `backend/internal/data/portfolio.json` | `techStack` array (shown in top nav) |
| **Featured projects** | `backend/internal/data/portfolio.json` | `featuredProjects` array (title, tags, image, description, links) |
| **Archive link** | `backend/internal/data/portfolio.json` | `archiveUrl` |
| **Project images** | `frontend/public/images/` | Replace placeholder images; update `imageUrl` in JSON |
| **Social links** | `backend/internal/data/portfolio.json` | `socialLinks` array |
| **Contact email** | `backend/internal/data/portfolio.json` | `owner.email` |
| **Colors & fonts** | `frontend/src/styles/variables.css` | CSS custom properties |
| **API URL (production)** | `frontend/.env.production` | `VITE_API_URL` |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/portfolio` | Full portfolio data (owner, tech stack, projects) |
| GET | `/api/health` | Health check |

## Branch Structure

This redesign is split across feature branches for review:

- `cursor/shared-config-bffa` — Project scaffolding, README, Docker
- `cursor/backend-api-bffa` — Go backend API
- `cursor/frontend-scaffold-bffa` — React + Vite setup
- `cursor/featured-deployments-ui-bffa` — UI components + API integration

## Legacy Site

The original static portfolio is preserved in `legacy/` for reference.
