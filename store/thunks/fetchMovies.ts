import { MovieFull, MovieResponse } from "@/types/typings"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { MoviesService } from "../../services/MoviesService"

export const getMoviesByQuery = createAsyncThunk<MovieResponse, string, {rejectValue: string}>(
  "movies/getMoviesByQuery",
  async (query, thunkApi) => {
    try {
      const res = await MoviesService.getMovies(query)
      if (res.Response === 'False') throw new Error(res.Error);
      
      return res
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getMoviesByPage = createAsyncThunk<MovieResponse, {search: string, page: number}, {rejectValue: string}>(
  "movies/getMoviesByPage",
  async (query, thunkApi) => {
    const {search, page} = query
    try {
      const res = await MoviesService.getMoviesPagination(search, page)
      return res
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)

export const getMovieById = createAsyncThunk<MovieFull, string, {rejectValue: string}>(
  "movies/getMovieById",
  async (query, thunkApi) => {
    try {
      const res = await MoviesService.getMovieById(query)
      return res
    } catch (error: any) {
      const message = error.message
      return thunkApi.rejectWithValue(message)
    }
  }
)