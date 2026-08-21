import styles from './Header.module.css';
import type { Profile } from '../../types/portfolio';

interface HeaderProps {
  profile: Profile;
}

/**
 * Minimal top navigation with logo and contact CTA.
 * CUSTOMIZE: Add nav links (About, Resume) or replace logo.png with your mark.
 */
export function Header({ profile }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#" aria-label="Home">
        <img src="/images/logo.png" alt={`${profile.name} logo`} />
        <span>{profile.name}</span>
      </a>

      <nav className={styles.nav} aria-label="Primary">
        <a href="#featured">Work</a>
        <a href="#about">About</a>
      </nav>

      <a className={styles.contact} href={`mailto:${profile.email}`}>
        {profile.contactLabel}
      </a>
    </header>
  );
}
