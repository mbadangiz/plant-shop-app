import { Typography } from "@mui/material";

const PartTitles = ({
  isCenter,
  mainTitle,
  subTitle,
}: {
  isCenter: boolean;
  mainTitle: string;
  subTitle: string;
}) => {
  const mdSide: "center" | "left" = isCenter ? "center" : "left";
  return (
    <>
      <Typography
        variant="h4"
        textAlign={{ xs: "center", md: mdSide }}
        fontSize={{ xs: "24px", md: "3rem" }}
      >
        {mainTitle}
      </Typography>
      <Typography
        variant="body2"
        mt={{ xs: "14px", md: "20px" }}
        sx={{ opacity: 0.4 }}
        textAlign={{ xs: "center", md: mdSide }}
        fontSize={{ xs: "14px", md: "16px" }}
      >
        {subTitle}
      </Typography>
    </>
  );
};

export default PartTitles;
