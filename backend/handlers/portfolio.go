package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/data"
	"github.com/Andrez-Dev01/Portfolio/backend/models"
)

// PortfolioHandler serves portfolio-related JSON endpoints.
type PortfolioHandler struct {
	portfolio models.Portfolio
}

// NewPortfolioHandler constructs a handler with the default portfolio data.
func NewPortfolioHandler() *PortfolioHandler {
	return &PortfolioHandler{
		portfolio: data.GetPortfolio(),
	}
}

// GetPortfolio returns the full portfolio payload.
func (h *PortfolioHandler) GetPortfolio(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, h.portfolio)
}

// GetSkills returns the dot-separated skill bar items.
func (h *PortfolioHandler) GetSkills(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string][]string{
		"skills": h.portfolio.Skills,
	})
}

// GetProjects returns featured deployment cards.
func (h *PortfolioHandler) GetProjects(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string][]models.Project{
		"projects": h.portfolio.Projects,
	})
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
