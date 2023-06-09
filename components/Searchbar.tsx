import { useRef, useState, useEffect } from "react"
import { TextField, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch"
import { setQuery } from "@/store/slices/moviesSlice"
import { getMoviesByQuery } from "@/store/thunks/fetchMovies"

const Searchbar = () => {
  const dispatch = useAppDispatch()
  const { query, error } = useAppSelector((state) => state.persistedReducer)

  const [searchValue, setSearchValue] = useState<string>(query)

  useEffect(() => {
    if (error.length) setSearchValue("")
  }, [error])

  const searchRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (e: React.FormEvent): void | null => {
    e.preventDefault()

    if (!searchValue) return null

    dispatch(getMoviesByQuery(searchValue.trim()))
    dispatch(setQuery(searchValue.trim()))
  }

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value)
  }

  const clearField = () => {
    setSearchValue("")
    searchRef.current?.focus()
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{ width: "100%", maxWidth: "550px" }}
    >
      <Typography variant="h2" sx={{ marginBottom: "10px", fontSize: "1rem" }}>
        Search movies and series:
      </Typography>
      <TextField
        inputRef={searchRef}
        value={searchValue}
        InputProps={{
          startAdornment: (
            <IconButton
              type="submit"
              aria-label="search"
              sx={{
                "&:hover": {
                  backgroundColor: "rgb(167, 167, 167, 0.2)",
                },
              }}
            >
              <SearchIcon
                type="submit"
                sx={{ color: "#dadada", cursor: "pointer" }}
              />
            </IconButton>
          ),
          endAdornment: (
            <IconButton
              onClick={clearField}
              sx={{
                "&:hover": {
                  backgroundColor: "rgb(167, 167, 167, 0.2)",
                },
              }}
            >
              <CloseIcon
                sx={{
                  display: searchValue ? "block" : "none",
                  color: "#dadada",
                  cursor: "pointer",
                }}
              />
            </IconButton>
          ),
        }}
        variant="outlined"
        placeholder="Type movie title..."
        size="medium"
        autoComplete="off"
        onChange={onChangeHandler}
        sx={{
          width: "100%",
          minWidth: "300px",
          background: "#424242",
          borderRadius: "4px",
          ".MuiInputBase-root": {
            paddingLeft: "12px",
            color: "#575757",
            boxShadow: "0px 8px 24px rgb(255, 255, 255, 0.07)",
            "& fieldset": {
              borderColor: "#777",
            },
            "&:hover fieldset": {
              borderColor: "#999",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2",
            },
          },

          ".MuiInputBase-root input": {
            padding: "13.5px 12px",
            fontSize: "14px",
            lineHeight: "150%",
            color: "#ffffff",
          },
        }}
      />
    </form>
  )
}

export default Searchbar
