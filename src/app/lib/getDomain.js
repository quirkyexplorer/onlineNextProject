export default function getDomain() {

  const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
  
  // need to see this PUBLIC_URL in vercel with value https//insertdomainhere.com so that is truthy when running 
  // in production mode, and does not default to localhost. 
  const domain = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "localhost:3000"

  return `${protocol}://${domain}`
}