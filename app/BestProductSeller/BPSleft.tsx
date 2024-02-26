import { Box, Grid } from "@mui/material";

export function BPSleft() {
  return (
    <Grid
      item
      xs={12}
      md={9}
      height={{ lg: "max-content" }}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <ProductsCards />
      <ProductsCards />
      <ProductsCards />
    </Grid>
  );
}

function ProductsCards() {
  return (
    <Box
      width={"270px"}
      height={"400px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
      }}
    >
      <Box
        bgcolor={"#C1D0E4"}
        width={"100%"}
        height={"83%"}
        sx={{
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          boxShadow: "0px 4px 10px 2px #DDDADA40",
        }}
      >
        <Box>1</Box>
        <Box
          height={"55%"}
          bgcolor={"#fff"}
          sx={{
            borderRadius: "inherit",
          }}
        >
          2
        </Box>
      </Box>
    </Box>
  );
}
