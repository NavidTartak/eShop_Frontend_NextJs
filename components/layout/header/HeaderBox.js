import React from "react";
import { Grid } from "@mui/material";
import styles from "./HeaderBox.module.css";

import RightGrid from "./headerbox/RightGrid";
import LeftGrid from "./headerbox/LeftGrid";

const HeaderBox = () => {
  return (
    <Grid
      className={`${styles.mainContainer}`}
      container
      justifyContent="space-between"
      alignItems="center"
      dir="rtl"
      padding={{ xs: "0 3vw", md: "0 2vw", lg: "0 1vw" }}
    >
      <RightGrid />
      <LeftGrid />
    </Grid>
  );
};

export default HeaderBox;
