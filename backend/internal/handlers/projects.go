package handlers

import (
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

// ProjectsHandler serves featured deployment data from the default portfolio seed.
// CUSTOMIZE: Later swap data.DefaultProjects() for a database or CMS-backed store.
type ProjectsHandler struct{}

func NewProjectsHandler() *ProjectsHandler {
	return &ProjectsHandler{}
}

func (h *ProjectsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	writeJSON(w, http.StatusOK, data.DefaultProjects())
}
