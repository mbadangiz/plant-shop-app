import { Box, Grid, Stack } from "@mui/material";
import PartTitles from "../Components/PartTitles";
import { LandingImageBoxes } from "../AppText";
import { StaticImageData } from "next/image";
import bedroomImage from "@/public/Images/bedroom.png";
import homeEntrance from "@/public/Images/homeEntrance.png";
import livingRoom from "@/public/Images/livingRoom.png";

const imageList: {
  label: string;
  gridsyslabel: string;
  bgImage: StaticImageData;
}[] = [
  { label: "Bedroom ", gridsyslabel: "green", bgImage: homeEntrance },
  { label: "Home Entrance", gridsyslabel: "red", bgImage: bedroomImage },
  { label: "Living Room", gridsyslabel: "blue", bgImage: livingRoom },
];

const ImageBoxes = () => {
  return (
    <Box paddingTop={10}>
      <Box mb={3}>
        <PartTitles
          isCenter={true}
          mainTitle={LandingImageBoxes.mainTitle}
          subTitle={LandingImageBoxes.subText}
        />
      </Box>
      <Grid
        container
        width={"100%"}
        height={{ xs: "650px", md: "550px" }}
        gridTemplateAreas={{
          xs: `"blue" "red" "green"`,
          md: `"blue blue blue green green" "red red red green green"`,
        }}
        sx={{
          display: "grid",
          gap: "15px",
        }}
      >
        {imageList.map((items) => {
          return <ImageBoxesCards key={items.gridsyslabel} data={items} />;
        })}
      </Grid>
    </Box>
  );
};

export default ImageBoxes;

function ImageBoxesCards({
  data: { label, gridsyslabel, bgImage },
}: {
  data: {
    label: string;
    gridsyslabel: string;
    bgImage: StaticImageData;
  };
}) {
  return (
    <Grid
      item
      gridArea={gridsyslabel}
      borderRadius={"30px"}
      sx={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        color: "#fff",
        position: "relative",
        transition: "0.2s all",
        cursor: "pointer",
        overflow: "hidden",
      }}
      className="group"
    >
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        borderRadius={"inherit"}
        fontWeight={300}
        fontSize={40}
        className="transition-[top]  
        bg-black/50 backdrop-blur-sm 
        absolute top-[100%] group-hover:top-[0%] 
        "
      >
        {label}
      </Stack>
    </Grid>
  );
}
