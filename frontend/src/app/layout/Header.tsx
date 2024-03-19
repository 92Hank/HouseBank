import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const midLinks = [
  { title: "Calculation", path: "/loanCalculation" },
  { title: "about", path: "/about" },
  { title: "home", path: "/" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6" component={NavLink} to={"/"} sx={navStyles}>
            HouseBank
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <>
            <List sx={{ display: "flex" }}>
              {midLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
            </List>

            <Box display="flex" alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <GitHubIcon />
              </IconButton>

              <List sx={{ display: "flex" }}>
                {rightLinks.map(({ title, path }) => (
                  <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                  >
                    {title.toUpperCase()}
                  </ListItem>
                ))}
              </List>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
