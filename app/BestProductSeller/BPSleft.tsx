import { Box, Grid, Rating, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ProductImage1 from "@/public/Images/bpd_flower1.png";
import ProductImage2 from "@/public/Images/bpd_flower2.png";
import ProductImage3 from "@/public/Images/bpd_flower3.png";
import AddIcon from "@/public/Icons/addIcon.png";

const productsList: {
  id: number;
  title: string;
  rate: number;
  price: number;
  image: StaticImageData;
}[] = [
  { id: 1, title: "name 1", image: ProductImage1, price: 26, rate: 4 },
  { id: 1, title: "name 2", image: ProductImage2, price: 70, rate: 1 },
  { id: 1, title: "name 3", image: ProductImage3, price: 10, rate: 3 },
];
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
      {productsList.map((item) => {
        return <ProductsCards data={item} key={item.id} />;
      })}
    </Grid>
  );
}

function ProductsCards({
  data: { id, title, rate, price, image },
}: {
  data: {
    id: number;
    title: string;
    rate: number;
    price: number;
    image: StaticImageData;
  };
}) {
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
        height={"85%"}
        sx={{
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "nowrap",
          boxShadow: "0px 4px 10px 2px #DDDADA40",
        }}
      >
        <Image src={image} alt="" className="w-4/5 relative bottom-5" />
        <Stack
          width={"100%"}
          height={"50%"}
          bgcolor={"#fff"}
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"start"}
          alignContent={"start"}
          sx={{
            borderRadius: "inherit",
            padding: "15px 30px",
            flexShrink: "0",
          }}
        >
          <Box textAlign={"left"}>
            <Typography
              variant="body1"
              fontWeight={600}
              mb={"8px"}
              fontSize={18}
            >
              {title}
            </Typography>
            <Rating size="small" name="read-only" value={rate} readOnly />
          </Box>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Typography variant="body1" mb={"8px"} fontSize={18}>
              $ {price}
            </Typography>
            <Image alt="" className="w-8 cursor-pointer" src={AddIcon} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
