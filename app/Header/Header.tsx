import BgImageDesktop from "@/public/Images/bg-header-desktop.png";
import BgImageMd from "@/public/Images/bg-header-md.png";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "../NavBar/Navbar";
import { HeaderBottomGradient } from "./HeaderBottomGradient";
import { HeaderInputContainer } from "./HeaderInputContainer";
import { HeaderMiddleText } from "./HeaderMiddleText";

const Header = () => {
  return (
    <Box
      height={"100svh"}
      sx={{
        backgroundImage: {
          xs: `url(${BgImageMd.src})`,
          md: `url(${BgImageDesktop.src})`,
        },
        backgroundPosition: "0px -27px",
        backgroundSize: {
          xs: "150% 99.9%",
          md: "100% 102.9%",
        },
      }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Container
          maxWidth="lg"
          sx={{
            padding: { md: "40px 0  10px 0 !important" },
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Navbar />
          <HeaderMiddleText />
          <HeaderInputContainer />
        </Container>
        <HeaderBottomGradient />
      </Stack>
    </Box>
  );
};

export default Header;
