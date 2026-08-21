package handlers

import (
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

// ProfileHandler serves optional hero/about/contact metadata for the portfolio header.
// CUSTOMIZE: Extend the profile payload with resume URL, headshot, etc.
type ProfileHandler struct{}

func NewProfileHandler() *ProfileHandler {
	return &ProfileHandler{}
}

func (h *ProfileHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	writeJSON(w, http.StatusOK, data.DefaultProfile())
}
