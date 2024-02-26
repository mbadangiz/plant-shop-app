import CustomInput from "../Components/CustomInput";
import BtnSearch from "@/public/Icons/btn-search.png";
import Image from "next/image";

export function HeaderInputContainer() {
  return (
    <CustomInput
      placeholder="Search Plant..."
      icon={
        <Image
          src={BtnSearch}
          alt="BtnSearch"
          className="w-8 lg:w-[35px] absolute right-[7px] top-[6px] lg:right-[11px] lg:top-[6.5px]"
        />
      }
    />
  );
}
