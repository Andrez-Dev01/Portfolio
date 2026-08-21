package handler

import (
	"encoding/json"
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/service"
)

// Handler groups HTTP handlers for the portfolio API.
type Handler struct {
	portfolio *service.PortfolioService
	corsOrigin string
}

// New creates a Handler with the given portfolio service and CORS origin.
func New(portfolio *service.PortfolioService, corsOrigin string) *Handler {
	return &Handler{
		portfolio:  portfolio,
		corsOrigin: corsOrigin,
	}
}

func (h *Handler) writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	h.setCORS(w)
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}

func (h *Handler) setCORS(w http.ResponseWriter) {
	if h.corsOrigin != "" {
		w.Header().Set("Access-Control-Allow-Origin", h.corsOrigin)
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	}
}

func (h *Handler) handleOptions(w http.ResponseWriter, r *http.Request) {
	h.setCORS(w)
	w.WriteHeader(http.StatusNoContent)
}
