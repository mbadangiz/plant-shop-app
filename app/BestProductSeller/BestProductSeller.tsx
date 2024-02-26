import { Grid } from "@mui/material";
import { BPSright } from "./BPSright";
import { BPSleft } from "./BPSleft";

const BestProductSeller = () => {
  return (
    <Grid container mt={5} alignItems={"center"}>
      <BPSright />
      <BPSleft />
    </Grid>
  );
};

export default BestProductSeller;
