import { ENDPOINTS } from '../config/constants';

async function fetchJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export function getPortfolio() {
  return fetchJSON(ENDPOINTS.portfolio);
}

export function getSkills() {
  return fetchJSON(ENDPOINTS.skills);
}

export function getProjects() {
  return fetchJSON(ENDPOINTS.projects);
}

export function getHealth() {
  return fetchJSON(ENDPOINTS.health);
}
