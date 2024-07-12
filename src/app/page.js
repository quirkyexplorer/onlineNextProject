import Image from "next/image";

export default function Home() {
// checking which environment we are currently 

  // if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
  //   console.log('Running in development mode');
  // } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
  //   console.log('Running in production mode');
  // }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-4xl">my example page</div>
      </div>

      
    </main>
  );
}
