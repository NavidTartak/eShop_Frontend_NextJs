import React from "react";
import { Button as MuiButton, CircularProgress, Skeleton } from "@mui/material";
const Button = ({
  width,
  height,
  fontSize,
  color,
  isLoading,
  isSkeleton,
  ...otherProps
}) => {
  const sx = () => {
    switch (color) {
      case "danger":
        return {
          background: "#c82d2d",
          fontSize: !fontSize ? "1em" : fontSize,
          width: !width ? "" : width,
          height: !height ? "" : height,
          "&:hover": {
            opacity: "0.9",
            background: "#c82d2d",
          },
        };

      default:
        return {
          background: "#c82d2d",
          fontSize: !fontSize ? "1em" : fontSize,
          width: !width ? "" : width,
          height: !height ? "" : height,
          "&:hover": {
            opacity: "0.9",
            background: "#c82d2d",
          },
        };
    }
  };
  const loadingSx = {
    background: "#F3F3F3",
    fontSize: !fontSize ? "1em" : fontSize,
    width: !width ? "" : width,
    height: !height ? "" : height,
  };
  if (isSkeleton) {
    return <Skeleton variant="rounded" height={40} />;
  }
  if (!isLoading) {
    return (
      <MuiButton
        className="IranSans tran-03"
        variant="contained"
        size="small"
        sx={sx}
        {...otherProps}
      />
    );
  }
  return (
    <MuiButton
      variant="contained"
      size="small"
      sx={loadingSx}
      disabled
      {...otherProps}
    >
      <CircularProgress
        className="text-dark"
        size={!fontSize ? "1em" : fontSize}
      />
    </MuiButton>
  );
};

export default Button;
