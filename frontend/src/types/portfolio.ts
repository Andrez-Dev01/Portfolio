// Portfolio API types — mirror backend/internal/model/portfolio.go
// Update alongside backend schema when adding new fields.

export interface Owner {
  name: string
  title: string
  bio: string
  email: string
}

export interface FeaturedProject {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  repoUrl: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface Portfolio {
  owner: Owner
  techStack: string[]
  featuredProjects: FeaturedProject[]
  archiveUrl: string
  socialLinks: SocialLink[]
}
