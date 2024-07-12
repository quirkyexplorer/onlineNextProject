'use client'

import { useEffect } from 'react'

export default function Error({error, reset}) {
  
  useEffect(() => {
    // here we would handle error, like sending an email notification or something
    // or send a report status
    console.log("error is ", error);
  }, [error])

  const retryRequestHandler = () => {
      reset()
  }
  return (
    <div>
      <h2>open ai not working!</h2>
      <button onClick={retryRequestHandler}>retry request</button>
    </div>
  )
}