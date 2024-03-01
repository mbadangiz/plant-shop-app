import { Box, Stack, Typography } from "@mui/material";
import { LandingFooterSiteSettings } from "../AppText";

const footerMainContentList: {
  [key: string]: string[];
} = {
  Support: ["About Us", "Careers", "Blog"],
  Useful_Link: ["Payment & Tax", "Team of service", "Privaci Policy"],
  Our_Menu: ["Best Product", "Category"],
  Address: [LandingFooterSiteSettings.address, LandingFooterSiteSettings.email],
};

export function FooterMainContentContainer() {
  const Properties = Object.keys(footerMainContentList);

  return (
    <Stack width={{ xs: "100%", md: "60%" }} direction={"row"} gap={6}>
      {Properties.map((items) => {
        return (
          <Box minWidth={"100px"} key={items}>
            <Typography variant="body1" fontSize={18} fontWeight={600}>
              {items.replaceAll("_", " ")}
            </Typography>
            {footerMainContentList[items].map((list) => {
              return (
                <Typography key={list} variant="body1" fontSize={14}>
                  {list}
                </Typography>
              );
            })}
          </Box>
        );
      })}
    </Stack>
  );
}
