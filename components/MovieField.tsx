import { Typography } from "@mui/material"

interface Props {
  title: string
  value: string
}

const MovieField = ({ title, value }: Props) => {
  return (
    <Typography
      sx={{
        marginBottom: "5px",
        fontSize: "0.8rem",
        color: "#b7b7b7",
        borderBottom: "1px solid #808080",
      }}
    >
      <span
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#fff",
        }}
      >
        {title}:
      </span>{" "}
      {value === "N/A" ? "-" : value}
    </Typography>
  )
}

export default MovieField
