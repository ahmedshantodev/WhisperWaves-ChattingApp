import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./firebaseConfig.js";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primaryColor: {
      main: "#32375c",
    },
    secondaryColor: {
      main: "#5b5f7d",
    },
    tertiaryColor: {
      main: "#e9e9e9",
    },
    primaryText: {
      main: "#222222",
    },
    secondaryText: {
      main: "#7a7a7a",
    },
  },
  typography: {
    fontFamily: ["Inter", "Poppins", "roboto"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
