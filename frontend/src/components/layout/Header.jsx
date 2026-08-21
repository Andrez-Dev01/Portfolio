import './Header.css';
import './Header.responsive.css';

/**
 * Minimal top navigation.
 * TODO(PERSONALIZE): Update nav links, logo, and contact email.
 */
export default function Header({ name, email }) {
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Primary">
        <a href="#" className="site-header__brand">
          {/* TODO(PERSONALIZE): Replace with your logo — swap src in public/images/ */}
          <img src="/images/logo.png" alt="" className="site-header__logo" />
          <span className="site-header__name">{name}</span>
        </a>

        <ul className="site-header__links">
          <li><a href="#projects">Work</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <a className="site-header__contact" href={`mailto:${email}`}>
          Contact
        </a>
      </nav>
    </header>
  );
}
