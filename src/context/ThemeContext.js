import React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { YouTubePlayerContext } from "./YouTubePlayerContext";

export default function ThemeContext({ children }) {
  const { darkMode } = useContext(YouTubePlayerContext);
  const theme = {
    primary: darkMode ? "#fa0202" : "#fefefe",
    secondary: darkMode ? "#f09eb3" : "#b57070",
    background: darkMode ? "#181818" : "#fff",
    border: darkMode ? "#303030" : "#fff",
    input: darkMode ? "#fcfafa" : "#f20707",
    padding: "60px 0",
    topMargin: "60px"
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
