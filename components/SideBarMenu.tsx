import { navPages } from "@/helpers/navPages"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Link from "next/link"

interface Props {
  open: boolean
  handleClose: () => void
}

const SideBarMenu = ({ open, handleClose }: Props) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        order: { xs: 0 },
      }}
    >
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            top: "64px",
            width: "100%",
            height: "auto",
            boxSizing: "border-box",
            zIndex: "5000",
            "@media screen and (max-width: 599px)": {
              top: "57px",
            },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          {navPages.map((page) => (
            <ListItem
              key={page.path}
              disablePadding
              sx={{
                "&:hover": {
                  backgroundColor: "#dadada",
                },
              }}
            >
              <Link
                href={page.path}
                style={{ display: "block", width: "100%", padding: "5px 10px" }}
                onClick={handleClose}
              >
                <ListItemText primary={page.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default SideBarMenu
