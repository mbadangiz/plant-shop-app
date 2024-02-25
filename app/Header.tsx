import { Box, Stack } from "@mui/material";
import BgImageDesktop from "@/public/Images/bg-header-desktop.png";
import BgImageMd from "@/public/Images/bg-header-md.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Box
      height={"100svh"}
      sx={{
        backgroundImage: {
          xs: `url(${BgImageMd.src})`,
          md: `url(${BgImageDesktop.src})`,
        },
        backgroundAttachment: "fixed",
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
        <Navbar />
        <Box>1</Box>
        <Box>1</Box>
        <HeaderBottomGradient />
      </Stack>
    </Box>
  );
};
export default Header;

const HeaderBottomGradient = () => {
  return (
    <Box
      height={"100px"}
      bgcolor={"gray"}
      width={"100%"}
      sx={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 83.65%)`,
      }}
    ></Box>
  );
};
