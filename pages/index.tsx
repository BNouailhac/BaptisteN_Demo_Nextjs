import Layout from "../components/layout"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../components/header.module.css"

export default function IndexPage() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <>
      <Layout>
      </Layout>
    </>
  )
}
