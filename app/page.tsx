import { Container } from "@mui/material";
import BestProductSeller from "./BestProductSeller/BestProductSeller";
import Header from "./Header/Header";
import ImageBoxes from "./ImageBoxes/ImageBoxes";
import Services from "./ServicesComp/Services";
import MyCustomTheme from "./MyCustomTheme";

export default function Home() {
  return (
    <MyCustomTheme>
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
    </MyCustomTheme>
  );
}
