import GlobalHead from "@/components/global/GlobalHead";
import ShoppingCartFinal from "@/components/pages/shoppingcart/ShoppingCartFinal";
import ShoppingCartProducts from "@/components/pages/shoppingcart/ShoppingCartProducts";
import { Grid } from "@mui/material";
import React from "react";

const shoppingcart = () => {
  return (
    <>
      <GlobalHead title="سبد خرید" />
      <Grid
        container
        className="user-select-none"
        justifyContent="center"
        alignItems="center"
        padding="3vh 0"
        rowGap="3vh"
      >
        <Grid item xs={11} dir="rtl">
          <h4 className="text-darker">سبد خرید</h4>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="flex-start"
          item
          xs={12}
          dir="rtl"
          rowGap={1}
        >
          <ShoppingCartProducts />
          <ShoppingCartFinal />
        </Grid>
      </Grid>
    </>
  );
};

export default shoppingcart;
