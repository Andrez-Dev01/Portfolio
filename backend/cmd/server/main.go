package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/handler"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/service"
)

func main() {
	port := envOrDefault("PORT", "8080")
	corsOrigin := envOrDefault("CORS_ORIGIN", "http://localhost:5173")

	dataPath := envOrDefault("PORTFOLIO_DATA", defaultDataPath())

	portfolioSvc, err := service.NewPortfolioService(dataPath)
	if err != nil {
		log.Fatalf("init portfolio service: %v", err)
	}

	h := handler.New(portfolioSvc, corsOrigin)

	mux := http.NewServeMux()
	mux.HandleFunc("/api/portfolio", h.GetPortfolio)
	mux.HandleFunc("/api/health", h.Health)

	addr := ":" + port
	log.Printf("portfolio API listening on %s", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("server error: %v", err)
	}
}

func envOrDefault(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}

func defaultDataPath() string {
	// Resolve path relative to module root for local dev and Docker.
	candidates := []string{
		"internal/data/portfolio.json",
		filepath.Join("backend", "internal", "data", "portfolio.json"),
	}
	for _, candidate := range candidates {
		if _, err := os.Stat(candidate); err == nil {
			return candidate
		}
	}
	return candidates[0]
}
