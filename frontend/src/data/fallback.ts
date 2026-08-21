import type { PortfolioData } from '../types/portfolio';

/**
 * Fallback seed data used when the Go API is unavailable (local UI dev, offline preview).
 * CUSTOMIZE: Keep this in sync with backend/internal/data/portfolio.go until integration is merged.
 */
export const fallbackPortfolioData: PortfolioData = {
  profile: {
    name: 'Andrez',
    title: 'Software Developer',
    tagline: 'Building scalable systems with precision and clarity.',
    email: 'andrez.code@gmail.com',
    github: 'https://github.com/Andrez-Dev01',
    linkedin: '',
    location: 'Modesto, CA',
    about:
      'Computer Science student at Modesto Junior College with a background in percussion and WGI performance.',
    contactLabel: 'Contact Me',
  },
  projects: {
    projects: [
      {
        id: 'nexus-analytics',
        title: 'Nexus Analytics',
        description:
          'Real-time analytics pipeline processing 2M+ events/day with sub-100ms query latency across distributed nodes.',
        imageUrl: '/images/projects/nexus-analytics.svg',
        tags: ['React', 'GraphQL'],
        projectUrl: 'https://github.com/Andrez-Dev01',
        featured: true,
      },
      {
        id: 'core-routing-engine',
        title: 'Core Routing Engine',
        description:
          'High-throughput microservice mesh handling 50K req/s with intelligent load balancing and circuit breaking.',
        imageUrl: '/images/projects/core-routing.svg',
        tags: ['Go', 'gRPC'],
        projectUrl: 'https://github.com/Andrez-Dev01',
        featured: true,
      },
      {
        id: 'pokemon-card-extension',
        title: 'Pokemon Card Extension',
        description:
          'Chrome extension using the Pokemon TCG API to surface random card art — my first full-stack browser project.',
        imageUrl: '/images/pokeapi.png',
        tags: ['JavaScript', 'Chrome APIs'],
        projectUrl: 'https://github.com/Andrez-Dev01',
        featured: true,
      },
    ],
    archive: {
      label: 'View Archive →',
      url: 'https://github.com/Andrez-Dev01?tab=repositories',
    },
  },
  techStack: {
    items: [
      { name: 'Node.js' },
      { name: 'Go' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'TypeScript' },
      { name: 'React.js' },
    ],
  },
};
