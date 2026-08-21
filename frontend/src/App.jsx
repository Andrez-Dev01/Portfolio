import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SkillBar from './components/skills/SkillBar';
import HeroSection from './components/hero/HeroSection';
import FeaturedDeployments from './components/projects/FeaturedDeployments';
import LoadingState from './components/common/LoadingState';
import ErrorState from './components/common/ErrorState';
import { usePortfolio } from './hooks/usePortfolio';
import './App.css';

function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="app">
        <LoadingState />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="app">
        <ErrorState message={error || 'No data returned from API.'} />
      </div>
    );
  }

  const { profile, skills, projects } = data;

  return (
    <div className="app">
      <SkillBar skills={skills} />
      <Header name={profile.name} email={profile.email} />
      <main className="app__main">
        <div className="app__container">
          <HeroSection profile={profile} />
          <FeaturedDeployments projects={projects} archiveLink={profile.archiveLink} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
