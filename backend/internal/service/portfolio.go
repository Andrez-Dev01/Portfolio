package service

import (
	"encoding/json"
	"fmt"
	"os"
	"sync"

	"github.com/Andrez-Dev01/Portfolio/backend/internal/model"
)

// PortfolioService loads and serves portfolio data from JSON.
// Replace internal/data/portfolio.json to customize your portfolio content.
type PortfolioService struct {
	mu        sync.RWMutex
	dataPath  string
	portfolio model.Portfolio
}

// NewPortfolioService creates a service that reads portfolio data from disk.
func NewPortfolioService(dataPath string) (*PortfolioService, error) {
	s := &PortfolioService{dataPath: dataPath}
	if err := s.reload(); err != nil {
		return nil, err
	}
	return s, nil
}

// GetPortfolio returns the loaded portfolio data.
func (s *PortfolioService) GetPortfolio() (model.Portfolio, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return s.portfolio, nil
}

// Reload re-reads portfolio data from disk (useful for development).
func (s *PortfolioService) Reload() error {
	s.mu.Lock()
	defer s.mu.Unlock()
	return s.reload()
}

func (s *PortfolioService) reload() error {
	raw, err := os.ReadFile(s.dataPath)
	if err != nil {
		return fmt.Errorf("read portfolio data: %w", err)
	}

	var portfolio model.Portfolio
	if err := json.Unmarshal(raw, &portfolio); err != nil {
		return fmt.Errorf("parse portfolio data: %w", err)
	}

	s.portfolio = portfolio
	return nil
}
