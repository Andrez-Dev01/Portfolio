import type { Portfolio } from '../types/portfolio'

const API_BASE = import.meta.env.VITE_API_URL ?? ''

/**
 * Fetch portfolio data from the Go backend.
 * Set VITE_API_URL in .env for production deployments.
 */
export async function fetchPortfolio(): Promise<Portfolio> {
  const response = await fetch(`${API_BASE}/api/portfolio`)

  if (!response.ok) {
    throw new Error(`Failed to fetch portfolio: ${response.status}`)
  }

  return response.json()
}
