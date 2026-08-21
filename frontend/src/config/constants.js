// TODO(PERSONALIZE): Point to your deployed API URL in production.
export const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const ENDPOINTS = {
  portfolio: `${API_BASE_URL}/api/portfolio`,
  skills: `${API_BASE_URL}/api/skills`,
  projects: `${API_BASE_URL}/api/projects`,
  health: `${API_BASE_URL}/api/health`,
};
