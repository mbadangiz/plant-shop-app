import { Box, Stack, Typography } from "@mui/material";
import { LandingHeaders } from "../AppText";

export function HeaderMiddleText() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      alignContent={"center"}
      sx={{
        marginTop: { xs: "100px", md: "70px", lg: "30px" },
        marginX: "auto",
        width: { lg: "1000px" },
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        textAlign={"center"}
        sx={{
          fontSize: { xs: "22px", md: "30px", lg: "60px" },
          width: { lg: "1000px" },
        }}
      >
        {LandingHeaders.mainTitle}
      </Typography>
      <Box
        textAlign={"center"}
        fontSize={"18px"}
        fontWeight={100}
        mt={2}
        sx={{
          fontSize: { xs: "13px", md: "16px", lg: "18px" },
          width: { xs: "270px", md: "330px", lg: "400px" },
        }}
      >
        {LandingHeaders.subText}
      </Box>
    </Stack>
  );
}
