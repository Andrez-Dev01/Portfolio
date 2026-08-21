package handler

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"testing"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/model"
	"github.com/Andrez-Dev01/Portfolio/backend/internal/service"
)

func setupTestHandler(t *testing.T) *Handler {
	t.Helper()
	dataPath := filepath.Join("..", "data", "portfolio.json")
	svc, err := service.NewPortfolioService(dataPath)
	if err != nil {
		t.Fatalf("setup service: %v", err)
	}
	return New(svc, "http://localhost:5173")
}

func TestGetPortfolio(t *testing.T) {
	h := setupTestHandler(t)

	req := httptest.NewRequest(http.MethodGet, "/api/portfolio", nil)
	rec := httptest.NewRecorder()
	h.GetPortfolio(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}

	var portfolio model.Portfolio
	if err := json.NewDecoder(rec.Body).Decode(&portfolio); err != nil {
		t.Fatalf("decode response: %v", err)
	}

	if portfolio.Owner.Name == "" {
		t.Error("expected owner name in response")
	}

	if rec.Header().Get("Access-Control-Allow-Origin") != "http://localhost:5173" {
		t.Error("expected CORS header")
	}
}

func TestHealth(t *testing.T) {
	h := setupTestHandler(t)

	req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
	rec := httptest.NewRecorder()
	h.Health(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}
}

func TestGetPortfolioOptions(t *testing.T) {
	h := setupTestHandler(t)

	req := httptest.NewRequest(http.MethodOptions, "/api/portfolio", nil)
	rec := httptest.NewRecorder()
	h.GetPortfolio(rec, req)

	if rec.Code != http.StatusNoContent {
		t.Fatalf("expected 204, got %d", rec.Code)
	}
}
