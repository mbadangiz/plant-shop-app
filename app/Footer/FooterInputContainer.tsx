import { Box, Typography } from "@mui/material";
import CustomInput from "../Components/CustomInput";

export function FooterInputContainer() {
  const additionalProps2 = {
    placeholder: "Enter your email address",
    type: "email",
  };

  return (
    <Box width={{ xs: "100%", md: "40%" }}>
      <Typography variant="h4">Newslatter</Typography>
      <CustomInput {...additionalProps2} icon={<SubscribeIcon />} />
    </Box>
  );
}

const SubscribeIcon = () => {
  return (
    <Box
      width={{ xs: "80px", md: "140px" }}
      height={{ xs: "35px", md: "40px" }}
      borderRadius={"1150px"}
      sx={{
        background: "linear-gradient(90deg, #2AF598 0%, #009EFD 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        flexWrap: "nowrap",
        position: "absolute",
        top: "5px",
        right: "5px",
        fontSize: { xs: "12px", md: "16px" },
      }}
    >
      Subscribe
    </Box>
  );
};
