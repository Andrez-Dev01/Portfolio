package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/handlers"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/middleware"
)

func main() {
	// CUSTOMIZE: Portfolio content lives in internal/data/store.go.
	store := data.NewPortfolioStore()

	projectsHandler := handlers.NewProjectsHandler(store)
	techStackHandler := handlers.NewTechStackHandler(store)

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/health", handlers.Health)
	mux.HandleFunc("GET /api/projects", projectsHandler.ListProjects)
	mux.HandleFunc("GET /api/tech-stack", techStackHandler.ListTechStack)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	addr := ":" + port
	log.Printf("Portfolio API listening on %s (CORS origin: %s)", addr, middleware.AllowedOrigin())

	if err := http.ListenAndServe(addr, middleware.CORS(mux)); err != nil {
		log.Fatalf("server failed: %v", err)
	}
}
