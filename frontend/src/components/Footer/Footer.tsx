import styles from './Footer.module.css';

/**
 * Minimal footer — CUSTOMIZE: Add copyright year, legal links, or analytics snippet.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} Portfolio. Built with React + Go.</p>
    </footer>
  );
}
