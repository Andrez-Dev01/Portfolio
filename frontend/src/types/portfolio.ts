// Portfolio domain types shared across components and API layer.

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  featured: boolean;
}

export interface ArchiveLink {
  label: string;
  url: string;
}

export interface ProjectsResponse {
  projects: Project[];
  archive: ArchiveLink;
}

export interface TechStackItem {
  name: string;
}

export interface TechStackResponse {
  items: TechStackItem[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin?: string;
  location?: string;
  about: string;
  contactLabel: string;
}

export interface PortfolioData {
  profile: Profile;
  projects: ProjectsResponse;
  techStack: TechStackResponse;
}
