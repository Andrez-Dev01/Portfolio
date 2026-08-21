import { useCallback, useEffect, useState } from 'react'
import { fetchPortfolio } from '../api/portfolio'
import type { Portfolio } from '../types/portfolio'

interface UsePortfolioResult {
  portfolio: Portfolio | null
  loading: boolean
  error: string | null
  retry: () => void
}

/** Loads portfolio data from the Go backend with loading and error states. */
export function usePortfolio(): UsePortfolioResult {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchPortfolio()
      setPortfolio(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { portfolio, loading, error, retry: load }
}
