import React from "react";
import { useEffect, useState } from 'react'
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import Link from "next/link"

export default function SomePage() {

  const [posts, setName] = useState(["", "", ""]);
  const [Comments, setComments] = useState([]);
  
  useEffect(() => {
    getPost();
    getComments();
  }, [])

  const getPost = async () => {
    const last = window.location.href.split('id=').pop();
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`+ last);
      const data = await res.json();
      setName([data.id, data.title, data.body])
		} catch (err) {
			console.log(err);
		}
	};

  const getComments = async () => {
    const last = window.location.href.split('id=').pop();
		try {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`+ last+`/comments`);
      setComments(await res.json())
		} catch (err) {
			console.log(err);
		}
	};

  return (
    <>
      <Link href="/posts">
        <a>Back</a>
      </Link>
      <div style={{ padding: 40 }}>
          <Card key={posts[0]}>
            <CardHeader color="warning">{posts[0]}# : {posts[1]}</CardHeader>
            <CardBody>
              <p>
                Body: {posts[2]}
              </p>
            </CardBody>
          </Card>
        <h1>Comments</h1>
        <div>
          <ol>
            {Comments.map((data) => {
              return(
                <Card key={data['id']}>
                  <CardBody>
                    <p>
                      Name : {data['name']}
                    </p>
                    <p>
                      Email : {data['email']}
                    </p>
                    <p>
                      Body : {data['body']}
                    </p>
                  </CardBody>
                </Card>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  );
}