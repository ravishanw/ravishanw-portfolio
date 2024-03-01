import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Navbar(props) {
  const [navState, setNav] = useState(null);

  // Functions for opening and closing nav menu

  function openNav(event) {
    setNav(event.target);
  }

  function closeNav() {
    setNav(null);
  }

  // Add line when clicked

  function addLine(e) {
    const nodeArray = document.querySelectorAll(".nav-num");
    nodeArray.forEach((item) => item.classList.remove("neon-line"));
    e.target.firstChild.classList.add("neon-line");
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        className="nav-bar"
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          filter: "drop-shadow(4px 4px 8px rgba(47, 32, 41, 0.1))",
          "& .MuiToolbar-root": {
            padding: { xs: "0 2rem", sm: "0 4rem", md: "0 6rem" },
          },
        }}
      >
        <Toolbar sx={{ paddingLeft: "50px", paddingRight: "50px" }}>
          <Box sx={{ flex: 1 }}>
            <a href="#" className="nav-brand-link">
              <img
                src="./ravi-logo.png"
                alt="ravishan-wijemanne-logo"
                className="nav-brand"
              />
            </a>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="menu-icon"
                aria-controls="nav-appbar"
                aria-haspopup="true"
                onClick={openNav}
                color="inherit"
              >
                <MenuIcon sx={{ color: "#2F2029" }} />
              </IconButton>
              <Menu
                id="nav-appbar"
                anchorEl={navState}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(navState)}
                onClose={closeNav}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {props.navList.map((el, index) => {
                  return (
                    <a href={el.navId} key={index}>
                      <MenuItem key={index}>
                        <span className="nav-num">{el.num}</span>
                        <span className="nav-item">{el.item}</span>
                      </MenuItem>
                    </a>
                  );
                })}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              {props.navList.map((el, index) => {
                return (
                  <a className="hover-craft" href={el.navId} key={index}>
                    <MenuItem
                      key={index}
                      sx={{
                        fontWeight: 300,
                      }}
                      onClick={addLine}
                    >
                      <span className="nav-num">{el.num}</span>
                      {el.item}
                    </MenuItem>
                  </a>
                );
              })}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
