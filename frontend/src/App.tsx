import { ErrorState } from './components/ErrorState'
import { FeaturedDeployments } from './components/FeaturedDeployments'
import { Layout } from './components/Layout'
import { LoadingState } from './components/LoadingState'
import { TechNav } from './components/TechNav'
import { usePortfolio } from './hooks/usePortfolio'

/**
 * Portfolio application root.
 * All content is driven by backend/internal/data/portfolio.json —
 * customize name, projects, tech stack, and links there.
 */
function App() {
  const { portfolio, loading, error, retry } = usePortfolio()

  if (loading) {
    return <LoadingState />
  }

  if (error || !portfolio) {
    return (
      <ErrorState
        message={error ?? 'Portfolio data unavailable. Is the backend running on port 8080?'}
        onRetry={retry}
      />
    )
  }

  return (
    <Layout>
      <TechNav items={portfolio.techStack} />
      <FeaturedDeployments
        projects={portfolio.featuredProjects}
        archiveUrl={portfolio.archiveUrl}
      />
    </Layout>
  )
}

export default App
