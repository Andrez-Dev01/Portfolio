import './ProjectCard.css';

/**
 * Featured deployment card with thumbnail, tags, title, and description.
 * TODO(PERSONALIZE): Thumbnails and project copy come from backend/data/portfolio.go.
 */
export default function ProjectCard({ project }) {
  const { title, description, tags = [], thumbnail, link } = project;

  const content = (
    <>
      <div className="project-card__media">
        <img
          src={thumbnail}
          alt=""
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay" aria-hidden="true" />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className="project-card project-card--link"
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}
