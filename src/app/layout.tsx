import Navbar from "@/components/Navbar"
import "./globals.css"
import { Inter, Inconsolata } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
// const inconsolata = Inconsolata({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "",
  description:'',
  keywords: "",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10 px-6 md:px-0">{children}</main>
      </body>
    </html>
  )
}
