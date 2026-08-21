import styles from './TechNav.module.css'

interface TechNavProps {
  /** Customize in backend/internal/data/portfolio.json */
  items: string[]
}

/**
 * Top navigation bar displaying tech stack keywords separated by bullets.
 */
export function TechNav({ items }: TechNavProps) {
  return (
    <nav className={styles.nav} aria-label="Tech stack">
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item} className={styles.item}>
            {index > 0 && <span className={styles.separator} aria-hidden="true">•</span>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
