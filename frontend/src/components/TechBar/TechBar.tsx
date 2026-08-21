import styles from './TechBar.module.css';
import type { TechStackItem } from '../../types/portfolio';

interface TechBarProps {
  items: TechStackItem[];
}

/**
 * Horizontal technology strip matching the minimalist design reference.
 * CUSTOMIZE: Items are loaded from API/fallback — edit backend seed or fallback.ts.
 */
export function TechBar({ items }: TechBarProps) {
  return (
    <section className={styles.bar} aria-label="Technology stack">
      <div className={styles.track}>
        {items.map((item, index) => (
          <span key={item.name} className={styles.item}>
            {item.name}
            {index < items.length - 1 && <span className={styles.dot} aria-hidden="true">•</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
