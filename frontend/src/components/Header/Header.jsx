import './Header.css';

/**
 * Hero section with name and bio.
 * CUSTOMIZE: Update your name, tagline, and bio text below.
 */
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <p className="header__eyebrow">Software Developer</p>
        <h1 className="header__title">
          {/* CUSTOMIZE: Replace with your name */}
          Andrez
        </h1>
        <p className="header__bio">
          {/* CUSTOMIZE: Write your own professional summary */}
          Computer Science student at Modesto Junior College, building scalable
          systems with precision. Background in percussion and WGI performance,
          now focused on backend engineering and full-stack development.
        </p>
        <div className="header__actions">
          {/* CUSTOMIZE: Update contact email and social links */}
          <a className="header__btn header__btn--primary" href="mailto:andrez.code@gmail.com">
            Contact Me
          </a>
          <a
            className="header__btn header__btn--ghost"
            href="https://github.com/Andrez-Dev01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
