package handler

import "net/http"

// GetPortfolio serves the full portfolio payload for the frontend.
func (h *Handler) GetPortfolio(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodOptions {
		h.handleOptions(w, r)
		return
	}

	if r.Method != http.MethodGet {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	portfolio, err := h.portfolio.GetPortfolio()
	if err != nil {
		http.Error(w, "failed to load portfolio", http.StatusInternalServerError)
		return
	}

	h.writeJSON(w, http.StatusOK, portfolio)
}
