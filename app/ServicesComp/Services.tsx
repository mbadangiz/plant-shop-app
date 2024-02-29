import BoxIcon from "@/public/Icons/box.png";
import WalletIcon from "@/public/Icons/wallet.png";
import SupportIcon from "@/public/Icons/247support.png";
import { Stack } from "@mui/material";
import { StaticImageData } from "next/image";
import { ServicesCards } from "../Components/ServicesCards";
import { I_ServiceCardModel } from "../Utilities/Models";

const ServicesItems: I_ServiceCardModel[] = [
  {
    id: 1,
    title: "Free Shapping",
    subTitle: "No charge for each delivery",
    image: BoxIcon,
  },
  {
    id: 2,
    title: "Quick Payment",
    subTitle: "100% secure payment",
    image: WalletIcon,
  },
  {
    id: 3,
    title: "24/7 Support",
    subTitle: "Quick support",
    image: SupportIcon,
  },
];

const Services = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      alignContent={"center"}
      flexWrap={"wrap"}
      sx={{
        justifyContent: { xs: "start", md: "space-evenly" },
        padding: "20px 0",
        flexDirection: { xs: "column", md: "row" },
      }}
      gap={2}
    >
      {ServicesItems.map((items) => {
        return <ServicesCards key={items.id} data={items} />;
      })}
    </Stack>
  );
};

export default Services;
