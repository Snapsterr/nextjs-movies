import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import { navPages } from "@/helpers/navPages"
import Link from "next/link"

const NavMenu = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {navPages.map((page) => (
        <Link key={page.path} href={page.path}>
          <MenuItem
            sx={{
              my: 2,
              color: "white",
              display: "block",
              "&:hover": {
                color: "#cdcdcd",
                backgroundColor: "transparent",
              },
            }}
          >
            {page.name}
          </MenuItem>
        </Link>
      ))}
    </Box>
  )
}

export default NavMenu
