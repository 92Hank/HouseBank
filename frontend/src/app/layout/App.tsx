import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingComponent from "./LoadingComponent";
import Home from "../../features/home/Home";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (!document.body) return <LoadingComponent />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollRestoration />
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        {location.pathname === "/" ? (
          <Home />
        ) : (
          <>
            <Container style={{ marginTop: "7em" }}>
              <Outlet />
            </Container>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
