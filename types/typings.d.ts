export interface NavPages {
  name: string
  path: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface Ratings {
  Source: string,
  Value: string
}

export interface MovieFull extends Movie {
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Ratings: Ratings[],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: boolean
}

interface MovieState {
  movies: Movie[]
  isLoading: boolean
  error: string
  movieById: MovieFull | null
  totalPages: number
  currentPage: number
  isPageNumChanged: boolean
  query: string
  favouritesId: string[]
  favouritesMovies: Movie[]
}

interface MovieResponse {
  Response: string
  Search: Movie[]
  totalResults: number
  Error?: string
}