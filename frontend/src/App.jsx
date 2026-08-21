import Layout from './components/Layout/Layout';
import TechStackMarquee from './components/TechStackMarquee/TechStackMarquee';
import Header from './components/Header/Header';
import FeaturedDeployments from './components/FeaturedDeployments/FeaturedDeployments';
import Footer from './components/Footer/Footer';
import { usePortfolioData } from './hooks/usePortfolioData';

/**
 * Root application shell for the Minimalist Portfolio redesign.
 * CUSTOMIZE: Swap section order or add new sections (About, Contact, etc.) here.
 */
function App() {
  const { techStack, projects, loading, error } = usePortfolioData();

  return (
    <Layout>
      <TechStackMarquee items={techStack} loading={loading} />
      <Header />
      <FeaturedDeployments projects={projects} loading={loading} error={error} />
      <Footer />
    </Layout>
  );
}

export default App;
