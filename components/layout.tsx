import Link from "next/link"
import styles from "../styles/header.module.css"
import { signIn, signOut, useSession } from "next-auth/react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <>
      <header>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
              
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      {session?.user && (
       
        <nav>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/me">
                <a>User</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      </header>
      {!session && (
        <main>
          <h1>NextAuth.js Example</h1>
          <p>
            This app have been made by Baptiste Nouailhac. Code source at:
            <a href="https://github.com/BNouailhac/BaptisteN_Demo_Nextjs/tree/main"> BaptisteN_Demo_Nextjs</a>
          </p>
        </main>
      
      )}
      {session?.user && (
        <main>{children}</main>
      )}
    </>
  )
}
