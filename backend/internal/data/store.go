package data

import "github.com/Andrez-Dev01/Portfolio/backend/internal/models"

// PortfolioStore holds in-memory portfolio content served by the API.
// CUSTOMIZE: This is the primary place to personalize your portfolio data.
// Swap titles, descriptions, image URLs, tags, and links with your own projects.
type PortfolioStore struct {
	Projects  []models.Project
	TechStack []models.TechStackItem
}

// NewPortfolioStore returns sample data matching the Minimalist Portfolio design.
func NewPortfolioStore() *PortfolioStore {
	return &PortfolioStore{
		// CUSTOMIZE: Update tech stack items to reflect YOUR skills and tools.
		TechStack: []models.TechStackItem{
			{Name: "Node.js"},
			{Name: "Go"},
			{Name: "PostgreSQL"},
			{Name: "Docker"},
			{Name: "Kubernetes"},
			{Name: "AWS"},
			{Name: "TypeScript"},
			{Name: "React.js"},
		},
		// CUSTOMIZE: Replace example projects with your own featured deployments.
		Projects: []models.Project{
			{
				ID:          "nexus-analytics",
				Title:       "Nexus Analytics",
				Description: "Real-time analytics platform processing millions of events per second with sub-100ms query latency across distributed clusters.",
				ImageURL:    "/images/projects/nexus-analytics.jpg",
				Tags:        []string{"React", "GraphQL"},
				Slug:        "nexus-analytics",
				Featured:    true,
				ProjectURL:  "https://github.com/Andrez-Dev01",
				ArchiveURL:  "https://github.com/Andrez-Dev01",
			},
			{
				ID:          "core-routing-engine",
				Title:       "Core Routing Engine",
				Description: "High-performance routing microservice handling geo-distributed traffic with intelligent load balancing and circuit breaking.",
				ImageURL:    "/images/projects/core-routing-engine.jpg",
				Tags:        []string{"Go", "gRPC"},
				Slug:        "core-routing-engine",
				Featured:    true,
				ProjectURL:  "https://github.com/Andrez-Dev01",
				ArchiveURL:  "https://github.com/Andrez-Dev01",
			},
			{
				ID:          "pokemon-card-api",
				Title:       "Pokemon Card API Extension",
				Description: "Chrome extension using the Pokemon API to display randomly selected Pokemon cards. Built during early web development learning.",
				ImageURL:    "/images/projects/pokeapi.png",
				Tags:        []string{"HTML", "CSS", "JavaScript"},
				Slug:        "pokemon-card-api",
				Featured:    false,
				ProjectURL:  "https://github.com/Andrez-Dev01",
				ArchiveURL:  "https://github.com/Andrez-Dev01",
			},
		},
	}
}

// FeaturedProjects returns only projects marked as featured for the homepage grid.
func (s *PortfolioStore) FeaturedProjects() []models.Project {
	featured := make([]models.Project, 0)
	for _, project := range s.Projects {
		if project.Featured {
			featured = append(featured, project)
		}
	}
	return featured
}
