"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch"
import { getMoviesByPage } from "@/store/thunks/fetchMovies"
import CustomGrid from "@/components/Grid"
import { Container, Typography } from "@mui/material"
import PaginationRange from "@/components/Pagination/PaginationRange"
import useAppNavigation from "@/hooks/useAppNavigation"
import { useEffect } from "react"
import { Box } from "@mui/system"
import Searchbar from "@/components/Searchbar/Searchbar"
import Popup from "@/components/Popup"
import Loader from "@/components/Loader/Loader"

import styles from "./page.module.css"

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
            ) : (
              <Typography
                variant="h1"
                sx={{
                  margin: "auto",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  "@media screen and (max-width: 599px)": {
                    fontSize: "1.7rem",
                  },
                }}
              >
                Enter the movie title in the search bar to get the result
              </Typography>
            )}
          </Box>
        </Container>
      </main>
      {isLoading && <Loader size="5rem" color="#fff" />}
      {error ? <Popup message={error} /> : null}
    </>
  )
}

export default Home
