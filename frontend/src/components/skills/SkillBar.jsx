import './SkillBar.css';

/**
 * Top tech skill bar — dot-separated stack list.
 * TODO(PERSONALIZE): Skills are loaded from the API; update backend/data/portfolio.go.
 */
export default function SkillBar({ skills = [] }) {
  if (!skills.length) {
    return null;
  }

  return (
    <div className="skill-bar" role="list" aria-label="Technical skills">
      <div className="skill-bar__track">
        {skills.map((skill, index) => (
          <span key={skill} className="skill-bar__item" role="listitem">
            {index > 0 && <span className="skill-bar__dot" aria-hidden="true">·</span>}
            <span className="skill-bar__label">{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
