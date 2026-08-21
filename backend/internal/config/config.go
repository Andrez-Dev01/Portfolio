package config

import (
	"os"
	"strings"
)

// Config holds runtime settings for the portfolio API server.
type Config struct {
	Port           string
	AllowedOrigins []string
}

// Load reads environment variables with sensible local-dev defaults.
// CUSTOMIZE: Set PORT and CORS_ORIGINS in production (e.g. https://yourdomain.com).
func Load() Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	origins := os.Getenv("CORS_ORIGINS")
	if origins == "" {
		origins = "http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173"
	}

	return Config{
		Port:           port,
		AllowedOrigins: splitAndTrim(origins),
	}
}

func splitAndTrim(value string) []string {
	parts := strings.Split(value, ",")
	result := make([]string, 0, len(parts))
	for _, part := range parts {
		trimmed := strings.TrimSpace(part)
		if trimmed != "" {
			result = append(result, trimmed)
		}
	}
	return result
}
