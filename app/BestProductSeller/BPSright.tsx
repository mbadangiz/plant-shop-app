import { Grid, Typography } from "@mui/material";
import { LandingBestProductSeller } from "../AppText";

export function BPSright() {
  return (
    <Grid item xs={12} md={3} height={{ lg: "max-content" }}>
      <Typography variant="h4" textAlign={"left"}>
        {LandingBestProductSeller.mainTitle}
      </Typography>
      <Typography
        variant="body2"
        fontSize={18}
        mt={"20px"}
        textAlign={"left"}
        sx={{ opacity: 0.4 }}
      >
        {LandingBestProductSeller.subText}
      </Typography>
    </Grid>
  );
}
