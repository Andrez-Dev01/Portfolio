package model

// Portfolio is the top-level response served by the API.
// Customize owner info, tech stack, and projects in internal/data/portfolio.json.
type Portfolio struct {
	Owner            Owner             `json:"owner"`
	TechStack        []string          `json:"techStack"`
	FeaturedProjects []FeaturedProject `json:"featuredProjects"`
	ArchiveURL       string            `json:"archiveUrl"`
	SocialLinks      []SocialLink      `json:"socialLinks"`
}

// Owner holds personal branding shown in the hero/header area.
type Owner struct {
	Name  string `json:"name"`
	Title string `json:"title"`
	Bio   string `json:"bio"`
	Email string `json:"email"`
}

// FeaturedProject represents a card in the Featured Deployments section.
type FeaturedProject struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	ImageURL    string   `json:"imageUrl"`
	ProjectURL  string   `json:"projectUrl"`
	RepoURL     string   `json:"repoUrl"`
}

// SocialLink is a footer/sidebar social profile link.
type SocialLink struct {
	Platform string `json:"platform"`
	URL      string `json:"url"`
	Label    string `json:"label"`
}
