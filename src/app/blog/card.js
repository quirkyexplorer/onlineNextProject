'use client'
import React from 'react'
import {useState} from 'react'

export default function Card({title}) {

  const [count, setCount ] = useState(0);

  const handleClick = () => {
    setCount( count + 1)
  }
  return (
    <div>
      { title ? (
        <>
          <h1 onClick={handleClick}>{title}</h1> 
          {count}
        </>
        ) : null
      }

    </div>
  )
}
