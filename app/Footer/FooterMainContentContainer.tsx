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
    <Stack
      width={{ xs: "100%", md: "60%" }}
      direction={"row"}
      gap={{ xs: 4, md: 6 }}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
    >
      {Properties.map((items) => {
        return (
          <Box minWidth={"120px"} key={items}>
            <Typography variant="body1" fontSize={18} fontWeight={600}>
              {items.replaceAll("_", " ")}
            </Typography>
            {footerMainContentList[items].map((list) => {
              return (
                <Typography
                  key={list}
                  variant="body2"
                  fontWeight={100}
                  fontSize={13}
                  mt={2}
                >
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
// Mohammad
