import getDomain from '../lib/getDomain'
import BlogCard from './card'
import { helloWorld } from '../lib/db'

// fetch caching options

// default force-cache
// revalidate: n seconds
// no-store

async function getData() {
  // 1 endpoint - API?
  const domain = getDomain();
  const endpoint = `${domain}/api/posts` // -> third party api request??
  //const res = await fetch(endpoint)
  //const res = await fetch(endpoint, {next: {revalidate: 10 }}) // HTTP GET

  const res = await fetch(endpoint, {cache: 'no-store' }) // HTTP GET

  if (!res.ok) {
      throw new Error("Failed to fetch data")
  }

  if (res.headers.get("content-type") !== "application/json") {
      return {items: []}
  }
  return res.json()
}


export default async function BlogPage() {
  const data = await getData();
  const dbHello = await helloWorld();
  const items = data && data.items ? [...data.items] : []
 

  console.log('dbHello' , dbHello )
  return (
    <main>
      <p>DB Response: {JSON.stringify(dbHello)} </p>
      <div>Posts: </div>
      {items && items.map((item, i) => {
        return  <BlogCard key={`post-${i}`} title={item.title}/>       
      })}

    </main>    
  )
}


export const runtime = 'edge' // if we dont do this, it defaults to node.js
export const preferredRegion = "auto"