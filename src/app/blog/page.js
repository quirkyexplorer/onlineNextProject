//'use client'

import React from 'react'
import getDomain from '../lib/getDomain'

// fetch caching options

// default force-cache
// revalidate: n seconds
// no-store

async function getData() {
  // 1 endpoint
  const domain = getDomain();
  const endpoint = `${domain}/api/posts`
  // revalidate every 10 seconds
  //const res = await fetch(endpoint, {next: {revalidate: 10 }})

  const res = await fetch(endpoint)

  if(!res.ok) {
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

      <div>page</div>
      {items && items.map((item, i) => {
        return <li key={`post-${i}`}>{item.title}</li>
      })}
    </main>    
  )
}
