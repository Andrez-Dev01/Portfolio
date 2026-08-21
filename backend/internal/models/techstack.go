package models

// TechStackItem represents one technology in the scrolling tech bar.
// CUSTOMIZE: Replace with your actual stack (languages, infra, tools).
type TechStackItem struct {
	Name string `json:"name"`
}

// TechStackResponse wraps the tech stack list for the API.
type TechStackResponse struct {
	Items []TechStackItem `json:"items"`
}
