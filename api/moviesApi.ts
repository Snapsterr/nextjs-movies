import axios from "axios"

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const BASE_URL = 'https://www.omdbapi.com'

const spaceDevApi = axios.create({
  baseURL: BASE_URL,
})

export default spaceDevApi