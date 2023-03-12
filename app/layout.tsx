import { Suspense } from "react"
import Loader from "@/components/Loader/Loader"
import Navbar from "@/components/Navbar/Navbar"
import GlobalProvider from "@/store/GlobalProvider/GlobalProvider"

import "./globals.css"

export const metadata = {
  title: "OMDb movie search",
  description: "Search the movie from OMDb api",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Suspense fallback={<Loader size="5rem" color="#fff" />}>
            <Navbar />
            {children}
          </Suspense>
        </GlobalProvider>
      </body>
    </html>
  )
}
