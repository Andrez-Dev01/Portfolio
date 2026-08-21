# Minimalist Portfolio Redesign

Full-stack portfolio redesign with a dark, high-tech aesthetic. React frontend + Go backend.

> **Design source:** Implemented from the "Minimalist Portfolio Redesign Series" spec (Stitch MCP was unavailable — layout follows the provided design description).

## Branches & Pull Requests

| Branch | Contents | PR |
|--------|----------|-----|
| `cursor/backend-api-d719` | Go REST API (`/api/portfolio`, `/api/skills`, `/api/projects`) | [Open PR](https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/backend-api-d719) |
| `cursor/frontend-scaffold-d719` | React + Vite scaffold, API service, hooks, design tokens | [Open PR](https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/frontend-scaffold-d719) |
| `cursor/featured-deployments-ui-d719` | Skill bar, featured deployments grid, header/hero/footer | [Open PR](https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/featured-deployments-ui-d719) |
| `cursor/responsive-styles-d719` | Mobile/tablet responsive CSS + full-stack integration | [Open PR](https://github.com/Andrez-Dev01/Portfolio/compare/master...cursor/responsive-styles-d719) |

**Recommended merge order:** backend → frontend-scaffold → featured-deployments-ui → responsive-styles

## Run Locally

### Prerequisites

- Go 1.22+
- Node.js 18+

### 1. Start the backend

```bash
cd backend
go run .
```

API runs at http://localhost:8080

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at http://localhost:5173 (proxies `/api` to backend)

### 3. Production build

```bash
cd frontend && npm run build
cd backend && go build -o portfolio-api .
```

## Project Structure

```
backend/
  data/portfolio.go      # Portfolio data (personalize here)
  handlers/              # HTTP handlers
  models/                # Go structs
  middleware/            # CORS

frontend/
  src/
    components/
      common/            # SectionHeader, LoadingState, ErrorState
      hero/              # HeroSection
      layout/            # Header, Footer
      projects/          # FeaturedDeployments, ProjectCard
      skills/            # SkillBar
    hooks/               # usePortfolio
    services/            # API client
    styles/              # Global + responsive CSS
  public/images/         # Static assets
```

## Personalization Checklist

Search the codebase for `TODO(PERSONALIZE)` comments. Key areas:

### Backend (`backend/data/portfolio.go`)

- [ ] **Name, title, bio, email** in `Profile`
- [ ] **Archive link** (`archiveLink`) — GitHub or projects page
- [ ] **Skills array** — top tech bar items
- [ ] **Projects** — title, description, tags, thumbnail path, link for each card

### Frontend

- [ ] **Header logo** — replace `frontend/public/images/logo.png`
- [ ] **Project thumbnails** — add images to `frontend/public/images/projects/`
- [ ] **Footer social links** — `src/components/layout/Footer.jsx`
- [ ] **Footer copy** — same file
- [ ] **Page title** — `frontend/index.html`
- [ ] **Production API URL** — set `VITE_API_URL` env var when deploying

### Legacy site

The original static site (`index.html`, `style.css`, `script.js`) remains on `master`. After merging all PRs, you can retire or redirect the old files.

## API Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/api/health` | `{"status":"ok"}` |
| GET | `/api/portfolio` | Full portfolio JSON |
| GET | `/api/skills` | `{"skills":[...]}` |
| GET | `/api/projects` | `{"projects":[...]}` |

## Test Results

Tested on branch `cursor/responsive-styles-d719` (Aug 21, 2026):

| Test | Result |
|------|--------|
| `go build` (backend) | ✅ Pass |
| `go run .` + `GET /api/health` | ✅ `{"status":"ok"}` |
| `GET /api/skills` | ✅ Returns 8 skills (Node.js … React.js) |
| `GET /api/projects` | ✅ Returns 3 project cards |
| `npm run build` (frontend) | ✅ Pass (56 modules, ~8.5 KB CSS) |
| `npm run dev` + page load | ✅ HTTP 200 at localhost:5173 |
| Vite `/api` proxy → backend | ✅ Full portfolio JSON returned |
| Responsive CSS | ✅ Breakpoints at 1024px, 768px, 480px |
