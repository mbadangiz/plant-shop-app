import { Box, Container, Stack } from "@mui/material";
import { FooterInputContainer } from "./FooterInputContainer";
import { FooterMainContentContainer } from "./FooterMainContentContainer";

const Footer = () => {
  return (
    <Box
      mt={5}
      sx={{
        padding: "50px 0 !important",
        background: " linear-gradient(93.99deg, #566270 0.51%, #283444 100%)",
        color: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          padding: { md: "0 0 0 0 !important" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: "20px", md: "row" }}
          paddingY={4}
          borderBottom="2px solid #fff"
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <FooterInputContainer />
          <FooterMainContentContainer />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
