/**
 * Resolves the API base URL.
 * CUSTOMIZE: Set VITE_API_URL in production (e.g. https://api.yourdomain.com).
 */
export function getApiBaseUrl() {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, '');
  }
  return '';
}

/**
 * Fetches JSON from the portfolio API with basic error handling.
 */
export async function fetchJson(path) {
  const base = getApiBaseUrl();
  const response = await fetch(`${base}${path}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
