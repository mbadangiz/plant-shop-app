"use client";
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#009EFD",
      light: "#fff",
    },
  },
});
import React, { ReactNode } from "react";

const MyCustomTheme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

export default MyCustomTheme;
