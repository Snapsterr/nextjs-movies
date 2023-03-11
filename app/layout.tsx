import Navbar from "@/components/Navbar/Navbar"
import GlobalProvider from "@/store/GlobalProvider/GlobalProvider"

import "./globals.css"

export const metadata = {
  title: "omdb test api",
  description: "app for test omdb api",
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
          <Navbar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
