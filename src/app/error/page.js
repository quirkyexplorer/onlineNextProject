//'use client'

import React from 'react'

async function getData() {
  // // 1 endpoint

  // const endpoint = "http://localhost:3000/pi/posts"
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
        <h1>Hello World</h1>
        <p>Posts:</p>
        {items && items.map((item, idx)=>{
            return <li key={`post-${idx}`}>{item.title}</li>
        })}
    </main>    
  )
}
