import { setPageNum, setPageNumUpdated } from "../store/slices/moviesSlice"
import { useAppDispatch } from "./useAppDispatch"


const useAppNavigation = () => {
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNum(value))
    dispatch(setPageNumUpdated())
  }

  return {  handleChange }
}

export default useAppNavigation
