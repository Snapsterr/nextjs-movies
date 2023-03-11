"use client"

import { useState } from "react"
import { useAppSelector } from "@/hooks/useAppDispatch"
import Home from "../page"
import { Box, Container } from "@mui/system"
import { Typography, Skeleton } from "@mui/material"
import Image from "next/legacy/image"
import MovieDetails from "@/components/MovieDetails/MovieDetails"
import Loader from "@/components/Loader/Loader"

import styles from "./page.module.css"

const MoviePage = () => {
  const { movieById, isLoading } = useAppSelector(
    (state) => state.persistedReducer
  )

  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true)

  if (movieById === null) {
    return <Home />
  }

  const { Title, Plot, Poster } = movieById

  if (isLoading) return <Loader size={"2rem"} color={"#fff"} />

  return (
    <main>
      <Container maxWidth="xl">
        <Typography
          sx={{
            margin: "50px 0px 20px 0px",
            fontSize: "1.7rem",
            textAlign: "center",
            "@media screen and (max-width: 599px)": {
              fontSize: "1.4rem",
            },
          }}
        >
          {Title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "40px",
            padding: "10px 0px",
            borderTop: "1px solid #dadada",
            borderBottom: "1px solid #dadada",

            "@media screen and (max-width: 899px)": {
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
        >
          <div className={styles.imgWrapper}>
            {Poster !== "N/A" && isImgLoaded && (
              <Skeleton
                width={"100%"}
                sx={{
                  minHeight: "300px",
                  maxHeight: "300px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  transform: "scale(1)",
                  backgroundColor: "#6c6c6c",
                  "@media screen and (max-width: 899px)": {
                    minHeight: "250px",
                    maxHeight: "250px",
                  },
                }}
              />
            )}
            {Poster !== "N/A" ? (
              <Image
                src={Poster !== "N/A" ? Poster : ""}
                alt={Title}
                quality={100}
                width={600}
                height={600}
                onLoad={() => setIsImgLoaded(false)}
                layout="responsive"
                objectFit="contain"
              />
            ) : (
              <div className={styles.noImgWrapper}>
                <div className={styles.noImg}>No image</div>
              </div>
            )}
          </div>

          <Box
            sx={{
              flex: "1 1 0",
              alignSelf: "start",
              "@media screen and (max-width: 899px)": {
                width: "100%",
              },
            }}
          >
            <MovieDetails movieById={movieById} />
          </Box>
        </Box>
        <Typography
          sx={{ margin: "30px 0px", fontSize: "1.4rem", textAlign: "center" }}
        >
          About Movie:
        </Typography>
        <Typography sx={{ marginBottom: "50px" }}>{Plot}</Typography>
      </Container>
    </main>
  )
}

export default MoviePage
