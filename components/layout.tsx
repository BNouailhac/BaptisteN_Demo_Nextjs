import Link from "next/link"
import styles from "./header.module.css"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <nav>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/client">
                <a>Client</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/protected">
                <a>Protected</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/api-example">
                <a>API</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin">
                <a>Admin</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/me">
                <a>Me</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
