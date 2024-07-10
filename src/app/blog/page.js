//'use client'

import React from 'react'

async function getData() {
  // 1 endpoint

  // const endpoint = "http://localhost:3000/api/posts"
  // const res = await fetch(endpoint)

  // if(!res.ok) {
  //   throw new Error("Failed to fetch data")
  // }

  // return res.json()
  return {items:[]}
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
