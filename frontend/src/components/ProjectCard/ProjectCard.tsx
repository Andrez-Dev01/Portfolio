import type { FeaturedProject } from '../../types/portfolio'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: FeaturedProject
}

/**
 * Featured project card with image, tag pills, title, and description.
 * Replace imageUrl in portfolio.json and add images to public/images/.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const CardWrapper = project.projectUrl ? 'a' : 'article'
  const wrapperProps = project.projectUrl
    ? { href: project.projectUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <CardWrapper className={styles.card} {...wrapperProps}>
      <div className={styles.imageWrapper}>
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          className={styles.image}
          loading="lazy"
        />
        <ul className={styles.tags} aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </CardWrapper>
  )
}
