import { Box } from "@mui/material";
import { LandingFooterSiteSettings } from "../AppText";
import { Key } from "@mui/icons-material";
const footerMainContentList: {
  Support: string[];
  Useful_Link: string[];
  Our_Menu: string[];
  Address: string[];
} = {
  Address: [LandingFooterSiteSettings.address, LandingFooterSiteSettings.email],
  Our_Menu: ["Best Product", "Category"],
  Useful_Link: ["Payment & Tax", "Team of service", "Privaci Policy"],
  Support: ["About Us", "Careers", "Blog"],
};

export function FooterMainContentContainer() {
  return (
    <Box width={{ xs: "100%", md: "60%" }}>
      {Object.keys(footerMainContentList).map((key: any) => {
        return (
          <Box>
            {key.replaceAll("_", " ")},{footerMainContentList[key]}
          </Box>
        );
      })}
    </Box>
  );
}

// function Content() {

// }}
