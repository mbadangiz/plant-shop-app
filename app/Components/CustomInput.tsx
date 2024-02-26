import { Box, InputBase } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../page";

const CustomInput = ({ icon, ...rest }: { icon?: ReactNode }) => {
  return (
    <Box
      position={"relative"}
      marginX={"auto"}
      marginY={"30px"}
      sx={{
        width: { xs: "300px", md: "450px" },
        height: { xs: "45px", md: "50px" },
        cursor: "pointer",
      }}
    >
      <InputBase
        className="h-full w-full bg-gray-600/50 backdrop-blur-lg  
        pl-5 pr-12 text-white rounded-full border-2 border-solid
        border-white font-inter200 text-xs lg:text-base"
        {...rest}
        sx={{
          cursor: "pointer",
          "::placeholder": {
            color: theme.palette.primary.light,
            opacity: "1 !import",
          },
        }}
      />
      {icon}
    </Box>
  );
};

export default CustomInput;
