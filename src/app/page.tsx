import Link from "next/link"

function Home() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about" className="text-blue-400 inline-block mt-8">
        About Page
      </Link>
    </div>
  )
}
export default Home
