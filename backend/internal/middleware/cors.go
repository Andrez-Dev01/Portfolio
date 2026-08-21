package middleware

import (
	"net/http"
	"os"
	"strings"
)

// CORS allows the React frontend to call the API during local development.
// CUSTOMIZE: Set PORTFOLIO_CORS_ORIGIN to your production frontend URL when deploying.
func CORS(next http.Handler) http.Handler {
	allowedOrigin := os.Getenv("PORTFOLIO_CORS_ORIGIN")
	if allowedOrigin == "" {
		allowedOrigin = "http://localhost:5173"
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// AllowedOrigin returns the configured CORS origin for logging and docs.
func AllowedOrigin() string {
	origin := os.Getenv("PORTFOLIO_CORS_ORIGIN")
	if strings.TrimSpace(origin) == "" {
		return "http://localhost:5173"
	}
	return origin
}
