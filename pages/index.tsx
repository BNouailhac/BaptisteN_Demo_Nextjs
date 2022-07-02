import Layout from "../components/layout"
import { useSession } from "next-auth/react"

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
