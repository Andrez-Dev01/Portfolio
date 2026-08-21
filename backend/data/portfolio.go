package data

import "github.com/Andrez-Dev01/Portfolio/backend/models"

// GetPortfolio returns the default portfolio payload.
// TODO(PERSONALIZE): Replace placeholder name, bio, email, and archive link with your details.
func GetPortfolio() models.Portfolio {
	return models.Portfolio{
		Profile: models.Profile{
			Name:  "Andrez",
			Title: "Software Engineer",
			Bio:   "Building scalable systems with precision. Computer Science student focused on backend infrastructure and full-stack delivery.",
			Email: "andrez.code@gmail.com",
			// TODO(PERSONALIZE): Point this to your GitHub projects page or personal archive route.
			ArchiveLink: "https://github.com/Andrez-Dev01",
		},
		// TODO(PERSONALIZE): Update this skill list to match your actual tech stack.
		Skills: []string{
			"Node.js",
			"Go",
			"PostgreSQL",
			"Docker",
			"Kubernetes",
			"AWS",
			"TypeScript",
			"React.js",
		},
		// TODO(PERSONALIZE): Replace sample projects with your real deployments, images, and links.
		Projects: []models.Project{
			{
				ID:          "nexus-analytics",
				Title:       "Nexus Analytics",
				Description: "Real-time analytics platform processing high-volume event streams with sub-second query latency.",
				Tags:        []string{"React", "GraphQL"},
				Thumbnail:   "/images/projects/nexus-analytics.svg",
				Link:        "https://github.com/Andrez-Dev01",
			},
			{
				ID:          "core-routing-engine",
				Title:       "Core Routing Engine",
				Description: "Distributed routing service built for fault tolerance and horizontal scale across multi-region clusters.",
				Tags:        []string{"Go", "gRPC"},
				Thumbnail:   "/images/projects/core-routing.svg",
				Link:        "https://github.com/Andrez-Dev01",
			},
			{
				ID:          "pokemon-card-api",
				Title:       "Pokemon Card Extension",
				Description: "Chrome extension leveraging the Pokemon TCG API to surface randomized card collections in the browser.",
				Tags:        []string{"JavaScript", "REST API"},
				Thumbnail:   "/images/pokeapi.png",
				Link:        "https://github.com/Andrez-Dev01",
			},
		},
	}
}
