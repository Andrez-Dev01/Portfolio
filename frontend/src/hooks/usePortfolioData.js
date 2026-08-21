import { useEffect, useState } from 'react';
import { fetchJson } from '../api/client';

// Fallback data when the API is unavailable (useful for static previews).
// CUSTOMIZE: Keep these in sync with backend/internal/data/store.go or remove if not needed.
const FALLBACK_TECH_STACK = [
  { name: 'Node.js' },
  { name: 'Go' },
  { name: 'PostgreSQL' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'AWS' },
  { name: 'TypeScript' },
  { name: 'React.js' },
];

const FALLBACK_PROJECTS = [
  {
    id: 'nexus-analytics',
    title: 'Nexus Analytics',
    description:
      'Real-time analytics platform processing millions of events per second with sub-100ms query latency across distributed clusters.',
    imageUrl: '/images/projects/nexus-analytics.svg',
    tags: ['React', 'GraphQL'],
    slug: 'nexus-analytics',
    featured: true,
  },
  {
    id: 'core-routing-engine',
    title: 'Core Routing Engine',
    description:
      'High-performance routing microservice handling geo-distributed traffic with intelligent load balancing and circuit breaking.',
    imageUrl: '/images/projects/core-routing-engine.svg',
    tags: ['Go', 'gRPC'],
    slug: 'core-routing-engine',
    featured: true,
  },
];

/**
 * Loads tech stack and featured projects from the Go API.
 */
export function usePortfolioData() {
  const [techStack, setTechStack] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const [stackData, projectData] = await Promise.all([
          fetchJson('/api/tech-stack'),
          fetchJson('/api/projects?featured=true'),
        ]);

        if (cancelled) return;

        setTechStack(stackData.techStack ?? FALLBACK_TECH_STACK);
        setProjects(projectData.projects ?? FALLBACK_PROJECTS);
      } catch (err) {
        if (cancelled) return;
        setError(err.message);
        setTechStack(FALLBACK_TECH_STACK);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { techStack, projects, loading, error };
}
