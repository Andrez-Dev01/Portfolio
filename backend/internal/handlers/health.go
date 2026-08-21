package handlers

import "net/http"

// Health responds with a simple OK payload for uptime checks.
func Health(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, http.StatusOK, map[string]string{
		"status": "ok",
	})
}
