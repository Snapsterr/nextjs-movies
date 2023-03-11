"use client"

import CustomGrid from "@/components/Grid"
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"
import { Box, Button } from "@mui/material"
import { resetFavourites } from "@/store/slices/moviesSlice"

import styles from "./page.module.css"

const MyList = () => {
  const dispatch = useAppDispatch()

  const { favouritesMovies } = useAppSelector((state) => state.persistedReducer)

  const resetFavouritesMovies = () => {
    dispatch(resetFavourites())
  }

  return (
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
          <Typography
            sx={{
              fontSize: "2rem",
              textAlign: "center",
              "@media screen and (max-width: 599px)": {
                fontSize: "1.6rem",
              },
            }}
          >
            There is your favourite movies and series list:
          </Typography>
          {favouritesMovies.length !== 0 ? (
            <>
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Button
                  onClick={resetFavouritesMovies}
                  sx={{
                    marginTop: "30px",
                    backgroundColor: "rgb(237, 17, 17, 0.5)",
                    color: "#ffffff",
                    textAlign: "center",
                    "&:hover": { backgroundColor: "rgb(237, 17, 17, 0.8)" },
                  }}
                >
                  Clear the list
                </Button>
              </Box>
              <CustomGrid movies={favouritesMovies} />
            </>
          ) : (
            <div className={styles.noFavouritesWrapper}>
              <ErrorOutlineOutlinedIcon
                sx={{ color: "#a3a3a3", fontSize: "7rem" }}
              />
              <div className={styles.noFavouritesText}>
                {"You haven't added anything yet"}
              </div>
            </div>
          )}
        </Box>
      </Container>
    </main>
  )
}

export default MyList
