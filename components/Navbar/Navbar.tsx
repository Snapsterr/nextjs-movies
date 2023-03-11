"use client"

import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import NavMenu from "../NavMenu"
import LiveTvIcon from "@mui/icons-material/LiveTv"
import Link from "next/link"
import SideBarMenu from "../SideBarMenu"
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import styles from "./Navbar.module.css"

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          <Link href="/" className={styles.logo}>
            <LiveTvIcon
              sx={{
                display: "flex",
                mr: 1,
                mb: "7px",
                width: "2rem",
                height: "2rem",
                order: { xs: "2", md: "1" },
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                order: { xs: "2", md: "1" },
              }}
            >
              Movies TV
            </Typography>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen((prev) => !prev)}
            edge="start"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <SideBarMenu open={open} handleClose={handleClose} />
          <NavMenu />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
