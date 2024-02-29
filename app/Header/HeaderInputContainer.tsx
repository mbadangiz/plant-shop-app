import CustomInput from "../Components/CustomInput";
import BtnSearch from "@/public/Icons/btn-search.png";
import { Box } from "@mui/material";
import Image from "next/image";

export function HeaderInputContainer() {
  const additionalProps = {
    placeholder: "Search Plant...",
  };
  return (
    <Box width={{ xs: "100%", md: "450px" }} mx={"auto"}>
      <CustomInput
        {...additionalProps}
        icon={
          <Image
            src={BtnSearch}
            alt="BtnSearch"
            className="w-8 lg:w-[35px] absolute right-[7px] top-[6px] lg:right-[8px] lg:top-[7px]"
          />
        }
      />
    </Box>
  );
}
