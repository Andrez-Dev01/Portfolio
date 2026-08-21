import styles from './ProjectCard.module.css';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

/**
 * Featured deployment card with hero image, tag pills, title, and description.
 * CUSTOMIZE: Project content comes from API — update images in public/images/projects/.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className={styles.imageWrap}>
        <img src={project.imageUrl} alt={`${project.title} preview`} loading="lazy" />
        <div className={styles.tags} aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </>
  );

  if (project.projectUrl) {
    return (
      <a
        className={styles.card}
        href={project.projectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
      >
        {content}
      </a>
    );
  }

  return <article className={styles.card}>{content}</article>;
}
