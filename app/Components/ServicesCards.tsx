import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { I_ServiceCardModel } from "../Utilities/Models";

export function ServicesCards({
  data: { id, title, subTitle, image },
}: {
  data: I_ServiceCardModel;
}) {
  return (
    <Stack
      gap={2}
      alignItems={"center"}
      alignContent={"center"}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
      <Image src={image} alt="title" className="w-10 lg:w-16" />
      <Box
        width={{
          xs: "200px",
          lg: "300px",
        }}
        mt={{ md: 2 }}
        sx={{ textAlign: { xs: "center", lg: "left" } }}
      >
        <Typography
          variant="body2"
          fontWeight={300}
          sx={{ fontSize: { xs: "18px", lg: "22px" }, mb: "7px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={500}
          fontSize={12}
          sx={{
            opacity: 0.5,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Stack>
  );
}
