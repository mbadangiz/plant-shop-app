import { Grid } from "@mui/material";
import PartTitles from "../Components/PartTitles";
import { LandingBestProductSeller } from "../AppText";

export function BPSright() {
  return (
    <Grid item xs={12} md={3} height={{ lg: "max-content" }}>
      <PartTitles
        isCenter={false}
        mainTitle={LandingBestProductSeller.mainTitle}
        subTitle={LandingBestProductSeller.subText}
      />
    </Grid>
  );
}
