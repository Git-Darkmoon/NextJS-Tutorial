import Link from "next/link"

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/" className="text-blue-400 inline-block mt-8">
        back to home
      </Link>
    </div>
  )
}
export default ContactPage
