package handlers

import (
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

// TechStackHandler serves the tech stack marquee items.
type TechStackHandler struct {
	store *data.PortfolioStore
}

// NewTechStackHandler creates a handler backed by the portfolio store.
func NewTechStackHandler(store *data.PortfolioStore) *TechStackHandler {
	return &TechStackHandler{store: store}
}

// ListTechStack responds with technologies shown in the top marquee bar.
func (h *TechStackHandler) ListTechStack(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]interface{}{
		"techStack": h.store.TechStack,
	})
}
