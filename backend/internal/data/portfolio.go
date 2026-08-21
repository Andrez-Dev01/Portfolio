package data

import "github.com/Andrez-Dev01/Portfolio/backend/internal/models"

// DefaultProjects returns featured deployment cards.
// CUSTOMIZE: Swap titles, descriptions, image URLs, tags, and links with your projects.
// Image URLs can be local (/images/...) or remote — the React app serves /images from public/.
func DefaultProjects() models.ProjectsResponse {
	return models.ProjectsResponse{
		Projects: []models.Project{
			{
				ID:          "nexus-analytics",
				Title:       "Nexus Analytics",
				Description: "Real-time analytics pipeline processing 2M+ events/day with sub-100ms query latency across distributed nodes.",
				// CUSTOMIZE: Replace with your project screenshot or hero image.
				ImageURL:   "/images/projects/nexus-analytics.svg",
				Tags:       []string{"React", "GraphQL"},
				ProjectURL: "https://github.com/Andrez-Dev01",
				Featured:   true,
			},
			{
				ID:          "core-routing-engine",
				Title:       "Core Routing Engine",
				Description: "High-throughput microservice mesh handling 50K req/s with intelligent load balancing and circuit breaking.",
				// CUSTOMIZE: Replace with your project screenshot or hero image.
				ImageURL:   "/images/projects/core-routing.svg",
				Tags:       []string{"Go", "gRPC"},
				ProjectURL: "https://github.com/Andrez-Dev01",
				Featured:   true,
			},
			{
				ID:          "pokemon-card-extension",
				Title:       "Pokemon Card Extension",
				Description: "Chrome extension using the Pokemon TCG API to surface random card art — my first full-stack browser project.",
				// CUSTOMIZE: Uses existing portfolio asset; replace when you add new work.
				ImageURL:   "/images/pokeapi.png",
				Tags:       []string{"JavaScript", "Chrome APIs"},
				ProjectURL: "https://github.com/Andrez-Dev01",
				Featured:   true,
			},
		},
		Archive: models.Archive{
			Label: "View Archive →",
			// CUSTOMIZE: Link to GitHub repos, Notion, or a dedicated projects page.
			URL: "https://github.com/Andrez-Dev01?tab=repositories",
		},
	}
}

// DefaultTechStack returns technologies displayed in the top bar.
// CUSTOMIZE: Match the screenshot stack or your personal toolchain.
func DefaultTechStack() models.TechStackResponse {
	return models.TechStackResponse{
		Items: []models.TechStackItem{
			{Name: "Node.js"},
			{Name: "Go"},
			{Name: "PostgreSQL"},
			{Name: "Docker"},
			{Name: "Kubernetes"},
			{Name: "AWS"},
			{Name: "TypeScript"},
			{Name: "React.js"},
		},
	}
}

// DefaultProfile returns hero and about content for optional profile endpoints.
// CUSTOMIZE: Personalize name, bio, contact email, and social links.
func DefaultProfile() map[string]interface{} {
	return map[string]interface{}{
		"name":        "Andrez",
		"title":       "Software Developer",
		"tagline":     "Building scalable systems with precision and clarity.",
		"email":       "andrez.code@gmail.com",
		"github":      "https://github.com/Andrez-Dev01",
		"linkedin":    "",
		"location":    "Modesto, CA",
		"about":       "Computer Science student at Modesto Junior College with a background in percussion and WGI performance. Passionate about engineering fundamentals and building tools that scale.",
		"contactLabel": "Contact Me",
	}
}
