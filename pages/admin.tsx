import Layout from "../components/layout"
import { useState, useEffect } from 'react';

export default function Page() {
  const [name, setName] = useState([]);
  
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
      <div className="App">
        <ol>
          {name.map((data) => {
            return(
              <li className="list-group-item" key={data.id}>{data.title}</li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}
