import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ButtonAppBar() {
  // Items array for navbar

  const navItems = [
    {
      num: "00",
      item: "Home",
    },
    {
      num: "01",
      item: "About me",
    },
    {
      num: "02",
      item: "My work",
    },
    {
      num: "03",
      item: "Contact me",
    },
    {
      num: "04",
      item: "Resume",
    },
  ];

  const [navState, setNav] = React.useState(null);

  // Functions for opening and closing nav menu

  function openNav(event) {
    setNav(event.target);
  }

  function closeNav() {
    setNav(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#2F2029",
        }}
      >
        <Toolbar>
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
                <MenuIcon />
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
                  p: "20px",
                }}
              >
                {navItems.map((el, index) => {
                  return (
                    <a href="#" key={index}>
                      <MenuItem key={index}>
                        <span className="nav-num">{el.num}</span>
                        {el.item}
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
                justifyContent: "space-evenly",
              }}
            >
              {navItems.map((el, index) => {
                return (
                  <a href="#" key={index}>
                    <MenuItem key={index} sx={{ fontWeight: 300 }}>
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
