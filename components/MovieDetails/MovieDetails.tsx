import { MovieFull, Ratings } from "@/types/typings"
import { Typography } from "@mui/material"
import React from "react"
import MovieField from "../MovieField"

import styles from "./MovieDetails.module.css"

interface Props {
  movieById: MovieFull
}

const MovieDetails = ({ movieById }: Props) => {
  const {
    Year,
    Title,
    Type,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Awards,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    DVD,
    BoxOffice,
    Production,
    Website,
  } = movieById

  return (
    <>
      <MovieField title={"Title"} value={Title} />
      <Typography
        sx={{
          marginBottom: "5px",
          fontSize: "0.8rem",
          color: "#b7b7b7",
          borderBottom: "1px solid #808080",
        }}
      >
        <span className={styles.propTitle}>IMDb Rating:</span> {imdbRating} (by{" "}
        {imdbVotes} votes)
      </Typography>
      <MovieField title={"Metascore"} value={Metascore} />
      <Typography
        sx={{
          marginBottom: "5px",
          fontSize: "0.8rem",
          color: "#b7b7b7",
          borderBottom: "1px solid #808080",
        }}
      >
        <span className={styles.propTitle}>Year:</span> {Year} ({Released})
      </Typography>
      <MovieField title={"Type"} value={Type} />
      <MovieField title={"Genre"} value={Genre} />
      <MovieField title={"Director"} value={Director} />
      <MovieField title={"Writer"} value={Writer} />
      <MovieField title={"Actors"} value={Actors} />
      <MovieField title={"Runtime"} value={Runtime} />
      <MovieField title={"Language"} value={Language} />
      <MovieField title={"Country"} value={Country} />
      <MovieField title={"Awards"} value={Awards} />
      <MovieField title={"DVD Release"} value={DVD} />
      <MovieField title={"BoxOffice"} value={BoxOffice} />
      <MovieField title={"Rated"} value={Rated} />
      <MovieField title={"Production"} value={Production} />
      <MovieField title={"Website"} value={Website} />
      <Typography
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginBottom: "5px",
          fontSize: "0.8rem",
        }}
      >
        <span className={styles.propTitle}>Ratings:</span>{" "}
        <span style={{ display: "flex", flexDirection: "column" }}>
          {Ratings.length
            ? Ratings.map((el: Ratings) => (
                <span
                  key={el.Value}
                  style={{
                    display: "flex",
                    margin: "3px 0px 0px 0px",
                    fontSize: "0.8rem",
                    color: "#b7b7b7",
                  }}
                >
                  {el.Source}: {el.Value}
                </span>
              ))
            : "-"}
        </span>
      </Typography>
    </>
  )
}

export default MovieDetails
