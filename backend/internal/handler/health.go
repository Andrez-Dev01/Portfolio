package handler

import "net/http"

// Health responds with a simple OK payload for uptime checks.
func (h *Handler) Health(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodOptions {
		h.handleOptions(w, r)
		return
	}

	h.writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}
