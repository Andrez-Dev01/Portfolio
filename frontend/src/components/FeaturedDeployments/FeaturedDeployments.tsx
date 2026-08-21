import type { FeaturedProject } from '../../types/portfolio'
import { ProjectCard } from '../ProjectCard'
import styles from './FeaturedDeployments.module.css'

interface FeaturedDeploymentsProps {
  /** Customize section copy in backend/internal/data/portfolio.json */
  projects: FeaturedProject[]
  archiveUrl: string
}

/**
 * Featured Deployments section — the centerpiece of the minimalist portfolio.
 * Update projects array and archiveUrl in portfolio.json to personalize.
 */
export function FeaturedDeployments({ projects, archiveUrl }: FeaturedDeploymentsProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.header}>
        <div className={styles.titles}>
          <h2 id="featured-heading" className={styles.heading}>
            Featured Deployments
          </h2>
          <p className={styles.subtitle}>
            Selected projects demonstrating scale and precision.
          </p>
        </div>
        <a href={archiveUrl} className={styles.archiveLink}>
          View Archive →
        </a>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
