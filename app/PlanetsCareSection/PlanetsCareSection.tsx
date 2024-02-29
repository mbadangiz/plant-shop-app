import SunIcon from "@/public/Icons/plantCareSun.png";
import TempretureIcon from "@/public/Icons/plantCareTempreture.png";
import WaterDropIcon from "@/public/Icons/plantCareWaterDrop.png";
import { Grid, Stack } from "@mui/material";
import { LandingPlantsCare } from "../AppText";
import PartTitles from "../Components/PartTitles";
import { ServicesCards } from "../Components/ServicesCards";
import { I_ServiceCardModel } from "../Utilities/Models";
import Image from "next/image";
import PalntCare from "@/public/Images/plantcare.png";
const PlanetsCareItems: I_ServiceCardModel[] = [
  {
    id: 1,
    image: SunIcon,
    subTitle:
      "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot",
    title: "Adjust Lighting",
  },
  {
    id: 1,
    image: WaterDropIcon,
    subTitle:
      "Watering ornamental plants indoors does not have to be done every day.",
    title: "Don't water too often",
  },
  {
    id: 1,
    image: TempretureIcon,
    subTitle:
      "The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength",
    title: "Fertilize regularly",
  },
];
const PlanetsCareSection = () => {
  return (
    <Grid container mt={6} width={"100%"} alignItems={"center"}>
      <Grid item xs={12} md={6} textAlign={"left"} gap={4} paddingY={6}>
        <PartTitles
          isCenter={false}
          mainTitle={LandingPlantsCare.mainTitle}
          subTitle={LandingPlantsCare.subText}
        />
        <Stack mt={3} gap={4}>
          {PlanetsCareItems.map((items) => {
            return <ServicesCards data={items} key={items.id} />;
          })}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"center"}>
        <Image src={PalntCare} className="w-[95%] sm:w-[70%] mx-auto" alt="s" />
      </Grid>
    </Grid>
  );
};

export default PlanetsCareSection;
