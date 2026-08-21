package handlers

import (
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

// ProjectsHandler serves portfolio project data as JSON.
type ProjectsHandler struct {
	store *data.PortfolioStore
}

// NewProjectsHandler creates a handler backed by the portfolio store.
func NewProjectsHandler(store *data.PortfolioStore) *ProjectsHandler {
	return &ProjectsHandler{store: store}
}

// ListProjects responds with all projects, or only featured ones when ?featured=true.
func (h *ProjectsHandler) ListProjects(w http.ResponseWriter, r *http.Request) {
	featuredOnly := r.URL.Query().Get("featured") == "true"

	var projects interface{}
	if featuredOnly {
		projects = h.store.FeaturedProjects()
	} else {
		projects = h.store.Projects
	}

	writeJSON(w, http.StatusOK, map[string]interface{}{
		"projects": projects,
	})
}
