import React from 'react'
import getDomain from '../lib/getDomain'
import BlogCard from './card'

// fetch caching options

// default force-cache
// revalidate: n seconds
// no-store

async function getData() {
  // 1 endpoint - API?
  const domain = getDomain()
  const endpoint = `${domain}/api/posts` // -> third party api request??
  //const res = await fetch(endpoint)
  //const res = await fetch(endpoint, {next: {revalidate: 10 }}) // HTTP GET

  console.log('domain',domain);

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
  const data = await getData()
  const items = data && data.items ? [...data.items] : []
  return (
    <main>
     
      <div>Posts: </div>
      {items && items.map((item, i) => {
        return  <BlogCard key={`post-${i}`} title={item.title}/>       
      })}

    </main>    
  )
}
