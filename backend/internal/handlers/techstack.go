package handlers

import (
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

// TechStackHandler serves the technology bar items.
type TechStackHandler struct{}

func NewTechStackHandler() *TechStackHandler {
	return &TechStackHandler{}
}

func (h *TechStackHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	writeJSON(w, http.StatusOK, data.DefaultTechStack())
}
