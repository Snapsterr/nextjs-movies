import { MovieFull, MovieResponse } from "@/types/typings"
import spaceDevApi, { API_KEY } from "../api/moviesApi"

export class MoviesService {
  static async getMovies(search: string): Promise<MovieResponse> {
    const res = await spaceDevApi.get<MovieResponse>(`/?s=${search}&page=1&apikey=${API_KEY}`)
    const data = res.data
    return data
  }

  static async getMoviesPagination(search: string, page: number): Promise<MovieResponse> {
    const res = await spaceDevApi.get<MovieResponse>(`/?s=${search}&page=${page}&apikey=${API_KEY}`)
    const data = res.data
    return data
  }

  static async getMovieById(id: string): Promise<MovieFull> {
    const res = await spaceDevApi.get<MovieFull>(`/?i=${id}&apikey=${API_KEY}`)
    const data = res.data
    return data
  }
}