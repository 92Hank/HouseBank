import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";


export default function MobileHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const linkStyles = {
    textDecoration: "none",
    color: theme.palette.mode === "dark" ? "white" : "black",
    fontSize: "20px",
  };
  
  const iconStyles = {
    color: "white",
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <ListItem
                component={NavLink}
                to="/"
                key="/loanCalculation"
                sx={linkStyles}
              >
                Home
              </ListItem>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <ListItem
                component={NavLink}
                to="/about"
                key="/loanCalculation"
                sx={linkStyles}
              >
                About
              </ListItem>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <ListItem
                component={NavLink}
                to="/loanCalculation"
                key="/loanCalculation"
                sx={linkStyles}
              >
                Calculation
              </ListItem>
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={iconStyles} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
