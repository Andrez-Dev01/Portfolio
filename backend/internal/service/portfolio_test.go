package service

import (
	"os"
	"path/filepath"
	"testing"
)

func TestPortfolioService_LoadsData(t *testing.T) {
	dataPath := filepath.Join("..", "data", "portfolio.json")

	svc, err := NewPortfolioService(dataPath)
	if err != nil {
		t.Fatalf("NewPortfolioService: %v", err)
	}

	portfolio, err := svc.GetPortfolio()
	if err != nil {
		t.Fatalf("GetPortfolio: %v", err)
	}

	if portfolio.Owner.Name == "" {
		t.Error("expected owner name to be set")
	}

	if len(portfolio.TechStack) == 0 {
		t.Error("expected tech stack entries")
	}

	if len(portfolio.FeaturedProjects) < 2 {
		t.Errorf("expected at least 2 featured projects, got %d", len(portfolio.FeaturedProjects))
	}
}

func TestPortfolioService_InvalidPath(t *testing.T) {
	_, err := NewPortfolioService("/nonexistent/portfolio.json")
	if err == nil {
		t.Error("expected error for missing file")
	}
}

func TestPortfolioService_Reload(t *testing.T) {
	tmpDir := t.TempDir()
	dataPath := filepath.Join(tmpDir, "portfolio.json")

	initial := `{"owner":{"name":"Test","title":"Dev","bio":"","email":""},"techStack":["Go"],"featuredProjects":[],"archiveUrl":"","socialLinks":[]}`
	if err := os.WriteFile(dataPath, []byte(initial), 0o644); err != nil {
		t.Fatalf("write temp file: %v", err)
	}

	svc, err := NewPortfolioService(dataPath)
	if err != nil {
		t.Fatalf("NewPortfolioService: %v", err)
	}

	portfolio, _ := svc.GetPortfolio()
	if portfolio.Owner.Name != "Test" {
		t.Errorf("expected Test, got %s", portfolio.Owner.Name)
	}

	updated := `{"owner":{"name":"Updated","title":"Dev","bio":"","email":""},"techStack":["Go"],"featuredProjects":[],"archiveUrl":"","socialLinks":[]}`
	if err := os.WriteFile(dataPath, []byte(updated), 0o644); err != nil {
		t.Fatalf("write updated file: %v", err)
	}

	if err := svc.Reload(); err != nil {
		t.Fatalf("Reload: %v", err)
	}

	portfolio, _ = svc.GetPortfolio()
	if portfolio.Owner.Name != "Updated" {
		t.Errorf("expected Updated after reload, got %s", portfolio.Owner.Name)
	}
}
