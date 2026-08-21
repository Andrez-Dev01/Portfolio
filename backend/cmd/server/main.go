package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/config"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/handlers"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/middleware"
)

func main() {
	cfg := config.Load()

	mux := http.NewServeMux()

	// REST endpoints consumed by the React frontend.
	mux.Handle("/api/health", http.HandlerFunc(handlers.Health))
	mux.Handle("/api/projects", handlers.NewProjectsHandler())
	mux.Handle("/api/tech-stack", handlers.NewTechStackHandler())
	mux.Handle("/api/profile", handlers.NewProfileHandler())

	handler := middleware.CORS(cfg.AllowedOrigins)(mux)

	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("Portfolio API listening on http://localhost%s", addr)
	log.Printf("Allowed CORS origins: %v", cfg.AllowedOrigins)

	if err := http.ListenAndServe(addr, handler); err != nil {
		log.Fatalf("server failed: %v", err)
	}
}
