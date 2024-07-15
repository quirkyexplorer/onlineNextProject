'use client'
import useSWR
 from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function GithubProfile() {
  const myGithubRepoProfile = "https://api.github.com/repos/quirkyexplorer/onlineNextProject"
  const {data, error, isLoading} = useSWR(myGithubRepoProfile, fetcher)
  if (error) return "An error happened"
  if (isLoading) return "Loading..."
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div className='flex gap-4'>
      
      <strong> 👁️ subscribers {data.subscribers_count}</strong>{" "}

      <strong> ❤️ star gazers {data.stargazers_count}</strong>{" "}

      <strong> 💪 forks {data.forks_count}</strong>{" "}
      </div>
      

    </div>
  );
}
