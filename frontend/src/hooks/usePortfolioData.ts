import { useEffect, useState } from 'react';
import type { PortfolioData } from '../types/portfolio';
import { loadPortfolioData } from '../services/api';

interface PortfolioState {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
  usingFallback: boolean;
}

export function usePortfolioData(): PortfolioState {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadPortfolioData()
      .then(({ data: portfolio, usingFallback: isFallback }) => {
        if (cancelled) return;
        setData(portfolio);
        setUsingFallback(isFallback);
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error, usingFallback };
}
