"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Skeleton,
} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import { Movie } from "@/types/typings"
import Link from "next/link"
import Image from "next/legacy/image"
import MovieIcon from "@mui/icons-material/Movie"
import { getMovieById } from "@/store/thunks/fetchMovies"
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch"
import {
  addToFavourites,
  removeFromFavourites,
} from "@/store/slices/moviesSlice"
import { compareId } from "@/helpers/compareId"

import styles from "./CardItem.module.css"

interface Props {
  movie: Movie
}

const CardItem = ({ movie }: Props) => {
  const dispatch = useAppDispatch()
  const { favouritesId } = useAppSelector((state) => state.persistedReducer)

  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(true)

  const { Poster, Title, Type, Year, imdbID } = movie
  const isFavourite = compareId(imdbID, favouritesId)

  return (
    <Link href={`/${imdbID}`} onClick={(e) => dispatch(getMovieById(imdbID))}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "455px",
          border: "1px solid #6c6c6c",
          boxShadow: "0px 8px 24px rgb(87, 93, 108, 0.3)",
          borderRadius: "5px",
          transition: "box-shadow 0.4s ease",
          background: "#303030",
          position: "relative",
          "&:hover": {
            boxShadow: "0px 8px 24px rgb(106, 122, 161, 0.5)",
          },
          "@media screen and (max-width: 899px)": {
            height: "405px",
          },
          "@media screen and (max-width: 599px)": {
            height: "385px",
          },
        }}
      >
        <div className={styles.cardImgWrapper}>
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
              quality={80}
              onLoad={() => setIsImgLoaded(false)}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <div className={styles.cardNoImgWrapper}>
              <div className={styles.cardNoImg}>No image</div>
            </div>
          )}
        </div>
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            padding: "25px",

            "@media screen and (max-width: 599px)": {
              padding: "15px !important",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{
              flex: "1 1 0",
              minWidth: "185px",
              maxHeight: "60px",
              marginBottom: "10px",
              color: "#ffffff",
              fontSize: "24px",
              lineHeight: "29px",
              fontWeight: 600,
              alignSelf: "center",
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              lineClamp: "2",
              WebkitBoxOrient: "vertical",
              "@media screen and (max-width: 899px)": {
                fontSize: "20px",
                lineHeight: "28px",
              },

              "@media screen and (max-width: 599px)": {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            {Title}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="start"
            sx={{ width: "100%" }}
          >
            <MovieIcon
              sx={{
                width: "1.3rem",
                height: "1.3rem",
                marginRight: "6px",
                color: "#b1b1b1",
              }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                flex: "1 1 0",
                fontSize: "14px",
                lineHeight: "150%",
                color: "#b1b1b1",
                overflow: "hidden",
                "@media screen and (max-width: 899px)": {
                  fontSize: "14px",
                  lineHeight: "150%",
                },
              }}
            >
              {Year}, {Type}
            </Typography>
            <CardActions sx={{ justifySelf: "flex-end", padding: "0px" }}>
              {!isFavourite ? (
                <IconButton
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    dispatch(addToFavourites(movie))
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgb(13, 215, 15, 0.5)",
                    },
                    "&:hover > .MuiSvgIcon-root": {
                      color: "#fff",
                    },
                  }}
                >
                  <AddIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#b1b1b1",
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    dispatch(removeFromFavourites(imdbID))
                  }}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgb(237, 17, 17, 0.5)",
                    },
                    "&:hover > .MuiSvgIcon-root": {
                      color: "#fff",
                    },
                  }}
                >
                  <CloseIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#b1b1b1",
                    }}
                  />
                </IconButton>
              )}
            </CardActions>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardItem
