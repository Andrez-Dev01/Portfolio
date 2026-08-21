import './ProjectCard.css';

/**
 * Single project card with image, tech tags, title, and description.
 * CUSTOMIZE: Replace placeholder images in public/images/projects/.
 */
function ProjectCard({ project }) {
  const imageSrc = project.imageUrl?.startsWith('http')
    ? project.imageUrl
    : project.imageUrl;

  return (
    <article className="project-card">
      <a
        className="project-card__image-link"
        href={project.projectUrl || '#'}
        target={project.projectUrl ? '_blank' : undefined}
        rel={project.projectUrl ? 'noopener noreferrer' : undefined}
        aria-label={`View ${project.title}`}
      >
        <div className="project-card__image-wrap">
          <img
            className="project-card__image"
            src={imageSrc}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={(event) => {
              // Fallback placeholder if image is missing
              event.currentTarget.src = '/images/projects/placeholder.svg';
            }}
          />
        </div>
      </a>

      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags?.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
