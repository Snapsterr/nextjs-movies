import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined"

interface Props {
  message: string
}

const Popup = ({ message }: Props) => {
  const [isOpen, setisOpen] = useState(true)
  return (
    <div>
      <Dialog
        fullScreen={false}
        open={isOpen}
        onClose={() => setisOpen(false)}
        aria-labelledby="responsive-dialog-title"
        sx={{ position: "absolute", ".MuiPaper-elevation": { width: "80%" } }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Error"}
          <IconButton
            aria-label="close"
            onClick={() => setisOpen(false)}
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "#787878",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "250px",
            maxHeight: "450px",
          }}
        >
          <ErrorOutlineOutlinedIcon sx={{ fontSize: "5rem", color: "red" }} />
          <DialogContentText sx={{ fontSize: "1.5rem" }}>
            {message}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Popup
