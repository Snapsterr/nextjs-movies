"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch"
import { getMoviesByPage } from "@/store/thunks/fetchMovies"
import CustomGrid from "@/components/Grid"
import Container from "@mui/material/Container"
import PaginationRange from "@/components/Pagination/PaginationRange"
import useAppNavigation from "@/hooks/useAppNavigation"
import { useEffect } from "react"
import { Box } from "@mui/system"
import Searchbar from "@/components/Searchbar/Searchbar"
import Popup from "@/components/Popup"

import styles from "./page.module.css"
import Loader from "@/components/Loader/Loader"

const Home = () => {
  const dispatch = useAppDispatch()

  const {
    movies,
    totalPages,
    currentPage,
    isPageNumChanged,
    query,
    error,
    isLoading,
  } = useAppSelector((state) => state.persistedReducer)

  useEffect(() => {
    if (movies.length !== 0) {
      dispatch(getMoviesByPage({ search: query, page: currentPage }))
    }
  }, [isPageNumChanged])

  const { handleChange } = useAppNavigation()

  // console.log("2", isPageNumChanged)

  return (
    <>
      <main className={styles.main}>
        <Container maxWidth="xl">
          <Box
            sx={{
              minHeight: "calc(100vh - 120px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Searchbar />
            {movies.length !== 0 ? (
              <>
                <CustomGrid movies={movies} />
                <PaginationRange
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleChange={handleChange}
                />
              </>
            ) : null}
          </Box>
        </Container>
      </main>
      {isLoading && <Loader size="5rem" color="#fff" />}
      {error ? <Popup message={error} /> : null}
    </>
  )
}

export default Home
