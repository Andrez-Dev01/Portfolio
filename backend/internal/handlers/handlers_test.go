package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHealthReturnsOK(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
	rec := httptest.NewRecorder()

	Health(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var body map[string]string
	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if body["status"] != "ok" {
		t.Fatalf("expected status ok, got %q", body["status"])
	}
}

func TestProjectsHandlerReturnsFeaturedProjects(t *testing.T) {
	handler := NewProjectsHandler()
	req := httptest.NewRequest(http.MethodGet, "/api/projects", nil)
	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var body struct {
		Projects []struct {
			Title string `json:"title"`
		} `json:"projects"`
		Archive struct {
			URL string `json:"url"`
		} `json:"archive"`
	}

	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if len(body.Projects) == 0 {
		t.Fatal("expected at least one project")
	}

	if body.Archive.URL == "" {
		t.Fatal("expected archive URL")
	}
}

func TestTechStackHandlerReturnsItems(t *testing.T) {
	handler := NewTechStackHandler()
	req := httptest.NewRequest(http.MethodGet, "/api/tech-stack", nil)
	rec := httptest.NewRecorder()

	handler.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	var body struct {
		Items []struct {
			Name string `json:"name"`
		} `json:"items"`
	}

	if err := json.NewDecoder(rec.Body).Decode(&body); err != nil {
		t.Fatalf("failed to decode response: %v", err)
	}

	if len(body.Items) < 4 {
		t.Fatalf("expected several tech stack items, got %d", len(body.Items))
	}
}
