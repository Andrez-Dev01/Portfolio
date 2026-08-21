import styles from './LoadingState.module.css'

export function LoadingState() {
  return (
    <div className={styles.container} role="status" aria-label="Loading portfolio">
      <div className={styles.spinner} />
      <p>Loading portfolio…</p>
    </div>
  )
}
