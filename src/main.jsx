import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f07c00",
    },
    error: {
      main: "#d32f2f",
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 576,
  //     md: 768,
  //     lg: 992,
  //     xl: 1200,
  //   },
  // },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
