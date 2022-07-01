import Layout from "../components/layout"
import { useState, useEffect } from 'react';
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import Link from "next/link"

export default function Page() {
  const [posts, setName] = useState([]);
  
  useEffect(() => {
    callAPI()
  }, [])

  const callAPI = async () => {
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
			setName(await res.json())
		} catch (err) {
			console.log(err);
		}
	};
  
  return (
    <Layout>
      <h1>List of Posts</h1>
      <div className="App">
        <ol>
          {posts.map((data) => {
            return(
              <Card key={data['id']}>
                <CardBody>
                  <p>
                    {data['id']}# : {data['title']}
                  </p>
                  <Link href={{
                    pathname: "/post-detail",
                    query: { id: data['id'] }, // the data
                  }}>
                    <a>See more</a>
                  </Link>
                </CardBody>
              </Card>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}
