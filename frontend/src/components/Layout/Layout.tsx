import styles from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

/** Page shell with centered content and consistent spacing. */
export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
