package models

// Portfolio aggregates all data served to the frontend.
type Portfolio struct {
	Profile  Profile   `json:"profile"`
	Skills   []string  `json:"skills"`
	Projects []Project `json:"projects"`
}

// Profile holds hero and contact metadata.
type Profile struct {
	Name        string `json:"name"`
	Title       string `json:"title"`
	Bio         string `json:"bio"`
	Email       string `json:"email"`
	ArchiveLink string `json:"archiveLink"`
}

// Project represents a featured deployment card.
type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
	Thumbnail   string   `json:"thumbnail"`
	Link        string   `json:"link"`
}
