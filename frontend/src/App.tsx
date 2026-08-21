import styles from './App.module.css';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LoadingState } from './components/LoadingState';
import { TechBar } from './components/TechBar';
import { usePortfolioData } from './hooks/usePortfolioData';

/**
 * Root layout for the minimalist dark portfolio.
 * Data is fetched from the Go API when available; otherwise local fallback seed is used.
 */
function App() {
  const { data, loading, error, usingFallback } = usePortfolioData();

  if (loading) {
    return (
      <div className={styles.page}>
        <LoadingState />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.page}>
        <p className={styles.error}>Unable to load portfolio: {error ?? 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.shell}>
        {usingFallback ? (
          <p className={styles.notice} role="status">
            Showing local preview data — start the Go API on port 8080 for live content.
          </p>
        ) : null}

        <Header profile={data.profile} />
        <Hero profile={data.profile} />
        <TechBar items={data.techStack.items} />
        <FeaturedProjects data={data.projects} />
        <About profile={data.profile} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
