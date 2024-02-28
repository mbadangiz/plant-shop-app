import { Grid, Typography } from "@mui/material";
import { LandingBestProductSeller } from "../AppText";

export function BPSright() {
  return (
    <Grid item xs={12} md={3} height={{ lg: "max-content" }}>
      <Typography
        variant="h4"
        textAlign={{ xs: "center", md: "left" }}
        fontSize={{ xs: "24px", md: "2.125rem" }}
      >
        {LandingBestProductSeller.mainTitle}
      </Typography>
      <Typography
        variant="body2"
        mt={{ xs: "14px", md: "20px" }}
        sx={{ opacity: 0.4 }}
        textAlign={{ xs: "center", md: "left" }}
        fontSize={{ xs: "14px", md: "18px" }}
      >
        {LandingBestProductSeller.subText}
      </Typography>
    </Grid>
  );
}
