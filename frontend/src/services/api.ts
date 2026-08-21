import type {
  PortfolioData,
  Profile,
  ProjectsResponse,
  TechStackResponse,
} from '../types/portfolio';
import { fallbackPortfolioData } from '../data/fallback';

// CUSTOMIZE: Set VITE_API_BASE_URL in .env (empty string uses same-origin /api via Vite proxy or reverse proxy).
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export interface LoadResult {
  data: PortfolioData;
  usingFallback: boolean;
}

async function fetchJSON<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Loads portfolio content from the Go API with graceful fallback to local seed data.
 */
export async function loadPortfolioData(): Promise<LoadResult> {
  try {
    const [profile, projects, techStack] = await Promise.all([
      fetchJSON<Profile>('/api/profile'),
      fetchJSON<ProjectsResponse>('/api/projects'),
      fetchJSON<TechStackResponse>('/api/tech-stack'),
    ]);

    return {
      data: { profile, projects, techStack },
      usingFallback: false,
    };
  } catch (error) {
    console.warn('[portfolio] API unavailable, using fallback data:', error);
    return {
      data: fallbackPortfolioData,
      usingFallback: true,
    };
  }
}

export { API_BASE_URL };
