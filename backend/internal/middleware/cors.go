package middleware

import (
	"net/http"
	"strings"
)

// CORS allows the React dev server and deployed frontend to call this API.
// CUSTOMIZE: Add your production domain(s) to allowedOrigins when deploying.
func CORS(allowedOrigins []string) func(http.Handler) http.Handler {
	originSet := make(map[string]struct{}, len(allowedOrigins))
	for _, origin := range allowedOrigins {
		originSet[strings.TrimSpace(origin)] = struct{}{}
	}

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")

			if origin != "" {
				if _, ok := originSet[origin]; ok {
					w.Header().Set("Access-Control-Allow-Origin", origin)
					w.Header().Set("Vary", "Origin")
					w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
					w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Accept")
				}
			}

			if r.Method == http.MethodOptions {
				w.WriteHeader(http.StatusNoContent)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}
