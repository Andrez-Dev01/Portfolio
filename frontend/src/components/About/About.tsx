import styles from './About.module.css';
import type { Profile } from '../../types/portfolio';

interface AboutProps {
  profile: Profile;
}

/**
 * Short about blurb for visitors who scroll past featured work.
 * CUSTOMIZE: Replace about text and add social URLs in backend seed data.
 */
export function About({ profile }: AboutProps) {
  return (
    <section id="about" className={styles.about}>
      <h2>About</h2>
      <p>{profile.about}</p>

      <div className={styles.links}>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {profile.linkedin ? (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        ) : null}
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </section>
  );
}
