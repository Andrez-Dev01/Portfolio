package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Andrez-Dev01/Portfolio/backend/handlers"
	"github.com/Andrez-Dev01/Portfolio/backend/middleware"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := handlers.NewPortfolioHandler()
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"status":"ok"}`))
	})
	mux.HandleFunc("GET /api/portfolio", handler.GetPortfolio)
	mux.HandleFunc("GET /api/skills", handler.GetSkills)
	mux.HandleFunc("GET /api/projects", handler.GetProjects)

	server := &http.Server{
		Addr:    ":" + port,
		Handler: middleware.CORS(mux),
	}

	log.Printf("Portfolio API listening on http://localhost:%s", port)
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
