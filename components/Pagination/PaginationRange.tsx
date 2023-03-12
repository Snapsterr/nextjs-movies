import { Pagination } from "@mui/material"

import styles from "./PaginationRange.module.css"

interface Props {
  currentPage: number
  totalPages: number
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const PaginationRange = ({ currentPage, totalPages, handleChange }: Props) => {
  if (totalPages <= 1) return null
  return (
    <div className={styles.paginationWrapper}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="large"
        sx={{
          fontSize: "16px",
          backgroundColor: "transparent !important",
          color: "#fff !important",
          ".MuiPagination-ul": {
            justifyContent: "center",
          },
          ".MuiButtonBase-root": {
            color: "#fff",
          },
          ".MuiTouchRipple-root": {
            color: "#fff",
          },
          ".MuiPaginationItem-root": {
            color: "#fff",

            "&:not(.MuiPaginationItem-ellipsis):hover": {
              backgroundColor: "#222222",
            },
          },
          ".MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#383838",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#5a5a5a",
            },
          },
          "@media screen and (max-width: 520px)": {
            ".MuiPaginationItem-root": {
              minWidth: "24px",
              height: "24px",
            },
          },
          "@media screen and (max-width: 420px)": {
            ".MuiPaginationItem-root": {
              padding: "0px 6px",
              minWidth: "20px",
              height: "20px",
            },
          },
        }}
      />
    </div>
  )
}

export default PaginationRange
