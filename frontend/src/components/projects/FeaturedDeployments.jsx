import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

/**
 * Featured Deployments section — project grid with archive link.
 * TODO(PERSONALIZE): Section copy and archive URL are set via API profile.archiveLink.
 */
export default function FeaturedDeployments({ projects = [], archiveLink = '#' }) {
  return (
    <section className="featured-deployments" id="projects" aria-labelledby="featured-heading">
      <SectionHeader
        title="Featured Deployments"
        subtitle="Selected projects demonstrating scale and precision."
        actionLabel="View Archive"
        actionHref={archiveLink}
      />
      <h2 id="featured-heading" className="visually-hidden">
        Featured Deployments
      </h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
