import React from "react";
import { Grid } from "@mui/material";
import Basket from "./leftgrid/Basket";
import RegisterButton from "./leftgrid/RegisterButton";
const LeftGrid = () => {
  return (
    <Grid
      container
      alignItems="center"
      flexWrap="wrap"
      item
      xs={4}
      sm={3}
      md={4}
      dir="ltr"
      columnGap={3}
    >
      <Basket />
      <RegisterButton />
    </Grid>
  );
};

export default LeftGrid;
