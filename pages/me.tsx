import { useSession } from "next-auth/react"
import Layout from "../components/layout"

export default function MePage() {
  const { data } = useSession()

  return (
    <Layout>
      <h1>User Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
