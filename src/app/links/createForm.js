'use client'
import React, {useState, useEffect} from 'react'

export default function LinksCreateForm() {
  const [results, setResults ] = useState(null);

 
  const handleForm = async (event) => {
    
    event.preventDefault();
    // this adds more flexibility for more inputs in the future
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data",data);
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/links/"
    console.log("JSONData", JSONData)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSONData
    }

    const response = await fetch(endpoint, options);

    const result = await response.json();

    console.log("result", results);
    setResults(result);
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input 
        type="text"
        defaultValue="https://github.com/quirkyexplorer/onlineNextProject"
        name="url" 
        placeholder="your url to shorten"
        />
        <button type="submit" >Shorten</button>
      </form>
      {results && JSON.stringify(results)}
    </>
  )
}
