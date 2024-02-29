"use client";
import { Box, InputBase } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../MyCustomTheme";

const CustomInput = ({
  icon,
  extraClasses,
  ...rest
}: {
  icon?: ReactNode;
  extraClasses?: string;
}) => {
  return (
    <Box
      position={"relative"}
      marginX={"auto"}
      marginY={"30px"}
      sx={{
        width: "100%",
        height: { xs: "45px", md: "50px" },
        cursor: "pointer",
      }}
    >
      <InputBase
        className={`h-full w-full bg-gray-600/50 backdrop-blur-lg  
        pl-5 pr-12 text-white rounded-full border-2 border-solid
        border-white font-inter200 text-xs lg:text-base ${
          extraClasses && extraClasses
        }`}
        {...rest}
        sx={{
          cursor: "pointer",
          "::placeholder": {
            color: theme.palette.primary.light,
            opacity: "1 !import",
          },
        }}
      />
      {icon && icon}
    </Box>
  );
};

export default CustomInput;
