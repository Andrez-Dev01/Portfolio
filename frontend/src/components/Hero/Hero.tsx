import styles from './Hero.module.css';
import type { Profile } from '../../types/portfolio';

interface HeroProps {
  profile: Profile;
}

/**
 * Compact hero introducing the developer above featured work.
 * CUSTOMIZE: Update profile fields via backend seed or fallback.ts.
 */
export function Hero({ profile }: HeroProps) {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>{profile.title}</p>
      <h1>
        Hi, I&apos;m <span>{profile.name}</span>.
      </h1>
      <p className={styles.tagline}>{profile.tagline}</p>
      {profile.location && <p className={styles.location}>{profile.location}</p>}
    </section>
  );
}
