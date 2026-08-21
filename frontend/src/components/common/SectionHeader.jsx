import './SectionHeader.css';

/**
 * Reusable section header with optional action link on the right.
 */
export default function SectionHeader({ title, subtitle, actionLabel, actionHref }) {
  return (
    <div className="section-header">
      <div className="section-header__text">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {actionLabel && actionHref && (
        <a className="section-header__action" href={actionHref} target="_blank" rel="noreferrer">
          {actionLabel}
          <span aria-hidden="true"> →</span>
        </a>
      )}
    </div>
  );
}
