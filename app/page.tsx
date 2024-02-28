"use client";
import { ThemeProvider } from "@emotion/react";
import Header from "./Header/Header";
import { Container, createTheme } from "@mui/material";
import Services from "./ServicesComp/Services";
import BestProductSeller from "./BestProductSeller/BestProductSeller";
import ImageBoxes from "./ImageBoxes/ImageBoxes";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#009EFD",
      light: "#fff",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          padding: { md: "40px 0 !important" },
          textAlign: "center",
        }}
      >
        <Services />
        <BestProductSeller />
        <ImageBoxes />
      </Container>
    </ThemeProvider>
  );
}
