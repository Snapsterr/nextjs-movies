import { CircularProgress } from "@mui/material"

import styles from "./Loader.module.css"

interface Props {
  size: string
  color: string
}

const Loader = ({ size, color }: Props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderWrapper}>
        <CircularProgress size={size} sx={{ color: color }} />
      </div>
    </div>
  )
}

export default Loader
