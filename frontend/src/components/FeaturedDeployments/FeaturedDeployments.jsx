import ProjectCard from '../ProjectCard/ProjectCard';
import './FeaturedDeployments.css';

/**
 * Featured Deployments section — project grid with archive link.
 * CUSTOMIZE: Archive URL and section copy below.
 */
function FeaturedDeployments({ projects, loading, error }) {
  return (
    <section className="featured" id="projects" aria-labelledby="featured-heading">
      <div className="featured__inner">
        <div className="featured__header">
          <div className="featured__titles">
            <h2 id="featured-heading" className="featured__heading">
              Featured Deployments
            </h2>
            <p className="featured__subtitle">
              Selected projects demonstrating scale and precision.
            </p>
          </div>
          {/* CUSTOMIZE: Point to your full project archive page or GitHub repos */}
          <a
            className="featured__archive"
            href="https://github.com/Andrez-Dev01"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Archive →
          </a>
        </div>

        {error && (
          <p className="featured__notice" role="status">
            Showing cached projects — API unavailable ({error})
          </p>
        )}

        <div className="featured__grid">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="featured__skeleton" aria-hidden="true" />
              ))
            : projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDeployments;
