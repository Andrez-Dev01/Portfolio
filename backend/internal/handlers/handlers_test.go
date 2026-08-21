package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/data"
)

func TestListProjects(t *testing.T) {
	store := data.NewPortfolioStore()
	handler := NewProjectsHandler(store)

	req := httptest.NewRequest(http.MethodGet, "/api/projects", nil)
	rec := httptest.NewRecorder()
	handler.ListProjects(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var body struct {
		Projects []struct {
			Title string `json:"title"`
		} `json:"projects"`
	}
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}
	if len(body.Projects) == 0 {
		t.Fatal("expected at least one project")
	}
}

func TestListFeaturedProjects(t *testing.T) {
	store := data.NewPortfolioStore()
	handler := NewProjectsHandler(store)

	req := httptest.NewRequest(http.MethodGet, "/api/projects?featured=true", nil)
	rec := httptest.NewRecorder()
	handler.ListProjects(rec, req)

	var body struct {
		Projects []struct {
			Featured bool `json:"featured"`
		} `json:"projects"`
	}
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}
	for _, project := range body.Projects {
		if !project.Featured {
			t.Fatal("expected only featured projects")
		}
	}
}

func TestListTechStack(t *testing.T) {
	store := data.NewPortfolioStore()
	handler := NewTechStackHandler(store)

	req := httptest.NewRequest(http.MethodGet, "/api/tech-stack", nil)
	rec := httptest.NewRecorder()
	handler.ListTechStack(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var body struct {
		TechStack []struct {
			Name string `json:"name"`
		} `json:"techStack"`
	}
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}
	if len(body.TechStack) == 0 {
		t.Fatal("expected tech stack items")
	}
}

func TestHealth(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
	rec := httptest.NewRecorder()
	Health(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}
}
