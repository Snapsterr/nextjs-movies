import { Suspense } from "react"
import Loader from "@/components/Loader/Loader"

export const metadata = {
  title: "My list",
  description: "User favourites movies list page",
}

export default function MyListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loader size="5rem" color="#fff" />}>
      {children}
    </Suspense>
  )
}
