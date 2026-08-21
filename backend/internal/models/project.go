package models

// Project represents a featured deployment shown on the portfolio.
// CUSTOMIZE: Add, remove, or reorder projects to match your real work.
type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	ImageURL    string   `json:"imageUrl"`
	Tags        []string `json:"tags"`
	ProjectURL  string   `json:"projectUrl,omitempty"`
	Featured    bool     `json:"featured"`
}

// ProjectsResponse wraps the featured projects list for the API.
type ProjectsResponse struct {
	Projects []Project `json:"projects"`
	Archive  Archive   `json:"archive"`
}

// Archive holds metadata for the "View Archive" link.
// CUSTOMIZE: Point ArchiveURL to your GitHub, blog, or full project index.
type Archive struct {
	Label string `json:"label"`
	URL   string `json:"url"`
}
