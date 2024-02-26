import BoxIcon from "@/public/Icons/box.png";
import WalletIcon from "@/public/Icons/wallet.png";
import SupportIcon from "@/public/Icons/247support.png";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

const ServicesItems: {
  id: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
}[] = [
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

function ServicesCards({
  data: { id, title, subTitle, image },
}: {
  data: {
    id: number;
    title: string;
    subTitle: string;
    image: StaticImageData;
  };
}) {
  return (
    <Stack
      gap={2}
      alignItems={"center"}
      alignContent={"center"}
      sx={{ flexDirection: { xs: "column", lg: "row" } }}
    >
      <Image src={image} alt="title" className="w-10 lg:w-16" />
      <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
        <Typography
          variant="body2"
          fontWeight={300}
          sx={{ fontSize: { xs: "18px", lg: "22px" }, marginTop: "10px" }}
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
