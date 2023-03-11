import { Movie } from "@/types/typings"
import Grid from "@mui/material/Grid"
import CardItem from "./Card/CardItem"

interface Props {
  movies: Movie[]
}

const CustomGrid = ({ movies }: Props) => {
  return (
    <Grid
      container
      spacing={{ xs: 3, sm: 3.5, md: 5.5 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      sx={{
        marginBottom: "50px",
        "@media screen and (max-width: 599px)": {
          marginBottom: "30px",
        },
        "@media screen and (min-width: 0px)": {
          marginTop: "0px",
        },
      }}
    >
      {movies.map((movie) => (
        <Grid item xs={4} sm={4} md={6} lg={4} key={movie.imdbID}>
          <CardItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CustomGrid
