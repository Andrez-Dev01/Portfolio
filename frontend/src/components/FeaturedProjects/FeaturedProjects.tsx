import styles from './FeaturedProjects.module.css';
import { ProjectCard } from '../ProjectCard';
import type { ProjectsResponse } from '../../types/portfolio';

interface FeaturedProjectsProps {
  data: ProjectsResponse;
}

/**
 * "Featured Deployments" section with two-column responsive grid.
 * CUSTOMIZE: Archive link URL/label comes from API seed data.
 */
export function FeaturedProjects({ data }: FeaturedProjectsProps) {
  const featured = data.projects.filter((project) => project.featured);

  return (
    <section id="featured" className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Featured Deployments</h2>
          <p>Selected projects demonstrating scale and precision.</p>
        </div>

        <a className={styles.archive} href={data.archive.url} target="_blank" rel="noreferrer">
          {data.archive.label}
        </a>
      </div>

      <div className={styles.grid}>
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
