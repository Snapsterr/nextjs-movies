import { MovieFull } from "./../../types/typings.d"
import { MovieResponse } from "@/types/typings"
import { Movie, MovieState } from "@/types/typings"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getMovieById, getMoviesByPage, getMoviesByQuery } from "../thunks/fetchMovies"

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: '',
  movieById: null,
  totalPages: 1,
  currentPage: 1,
  isPageNumChanged: false,
  query: '',
  favouritesId: [],
  favouritesMovies: [],
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    }, 
    setPageNumUpdated(state) {
      state.isPageNumChanged = !state.isPageNumChanged
    },
    setPageNum(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    addToFavourites(state, action: PayloadAction<Movie>) {
      state.favouritesId = [...state.favouritesId, action.payload.imdbID]
      state.favouritesMovies = [...state.favouritesMovies, action.payload]
    },
    removeFromFavourites(state, action: PayloadAction<string>) {
      const favouritesIdWithIndex = state.favouritesId.findIndex((el) => el === action.payload)
      const favouritesMoviesWithIndex = state.favouritesMovies.findIndex((el) => el.imdbID === action.payload)

      if (favouritesIdWithIndex > -1) {
        state.favouritesId.splice(favouritesIdWithIndex, 1)
        state.favouritesMovies.splice(favouritesMoviesWithIndex, 1)
      }
    },
    resetFavourites(state) {
      state.favouritesId = []
      state.favouritesMovies = []
    }
  },
  extraReducers: (builder) => {
    builder
      //getMoviesByQyery
      .addCase(getMoviesByQuery.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(getMoviesByQuery.fulfilled, (state, action: PayloadAction<MovieResponse>) => {
        state.isLoading = false
        state.movies = action.payload.Search
        state.totalPages = Math.ceil(+action.payload.totalResults / 10)
        state.currentPage = 1
        state.movieById = null
      })
      .addCase(getMoviesByQuery.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      })

      //getMoviesByPage
      .addCase(getMoviesByPage.pending, (state) => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(getMoviesByPage.fulfilled, (state, action: PayloadAction<MovieResponse>) => {
        state.isLoading = false
        state.movies = action.payload.Search
        state.movieById = null
      })
      .addCase(getMoviesByPage.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      })

      //getMovieById
      .addCase(getMovieById.pending, (state) => {
        state.error = ''
        state.isLoading = true
        state.movieById = null
      })
      .addCase(getMovieById.fulfilled, (state, action: PayloadAction<MovieFull>) => {
        state.isLoading = false
        state.movieById = action.payload
      })
      .addCase(getMovieById.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { setQuery, setPageNumUpdated, setPageNum, addToFavourites, removeFromFavourites, resetFavourites } = moviesSlice.actions

export default moviesSlice.reducer