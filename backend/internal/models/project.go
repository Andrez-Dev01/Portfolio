package models

// Project represents a portfolio deployment shown on the site.
// CUSTOMIZE: Add your real projects here via internal/data/store.go.
type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	ImageURL    string   `json:"imageUrl"`
	Tags        []string `json:"tags"`
	Slug        string   `json:"slug"`
	Featured    bool     `json:"featured"`
	ProjectURL  string   `json:"projectUrl,omitempty"`  // CUSTOMIZE: Link to live demo or repo
	ArchiveURL  string   `json:"archiveUrl,omitempty"`  // CUSTOMIZE: Link to case study or docs
}
