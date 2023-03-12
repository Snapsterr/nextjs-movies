import { Suspense } from "react"
import Loader from "@/components/Loader/Loader"

export const metadata = {
  title: "Movie details",
  description: "Movie details page",
}

export default function MovieDetailsLayout({
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
