import { LocalMall } from "@mui/icons-material";
import { Badge, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "../page";
import LogoCompany from "@/public/Icons/SiteIcon.png";
import NavBarResMenu from "./NavBarResMenu";

const MenuItems: { label: string; id: number }[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "Shop" },
  { id: 3, label: "About Us" },
  { id: 4, label: "Contact" },
];
const Navbar = () => {
  return (
    <Stack
      height={60}
      direction={"row"}
      justifyContent={"space-between"}
      alignContent={"center"}
      alignItems={"center"}
      sx={{
        padding: { xs: "0 15px !important", md: "0" },
      }}
    >
      <Stack
        direction={"row"}
        gap={2}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Image src={LogoCompany} alt="logo" width={30} />
        <Typography variant="h6" fontWeight={700}>
          Daunku
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={6}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        {MenuItems.map((item) => {
          return <NavBarMenuItems key={item.id} label={item.label} />;
        })}
      </Stack>

      <Stack direction={"row"} alignContent={"center"} alignItems={"center"}>
        <NavBarResMenu menuItems={MenuItems} />
        <Badge badgeContent={4} color="primary">
          <LocalMall
            sx={{
              color: theme.palette.primary.light,
            }}
          />
        </Badge>
      </Stack>
    </Stack>
  );
};

export default Navbar;

const NavBarMenuItems = ({ label }: { label: string }) => {
  return (
    <Box
      fontWeight={300}
      sx={{
        transition: "all 0.2s",
        padding: "4px",
        "&:hover": {
          cursor: "pointer",
          textDecoration: "underline",
          color: theme.palette.primary.main,
        },
      }}
    >
      {label}
    </Box>
  );
};
