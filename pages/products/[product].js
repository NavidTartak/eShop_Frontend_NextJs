import React from "react";
import * as Repo from "@/repository/AxiosRepository";
import GlobalHead from "@/components/global/GlobalHead";
import { Grid } from "@mui/material";
import SingleProductCart from "@/components/pages/product/SingleProductCart";
import SingleProductDetails from "@/components/pages/product/SingleProductDetails";
const Product = ({ product }) => {
  return (
    <>
      <GlobalHead title={product.name} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="3vh 0"
        rowGap="3vh"
      >
        <Grid item xs={11} dir="rtl">
          {product.dailySuggest ? (
            <h3 className="text-danger user-select-none">پیشنهاد روزانه</h3>
          ) : (
            <h3 className="user-select-none">&nbsp;</h3>
          )}
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="flex-start"
          item
          xs={12}
          dir="rtl"
        >
          <Grid
            item
            xs={11}
            md={3.9}
            lg={4.4}
            style={{ border: "1px solid red" }}
          >
            right
          </Grid>
          <SingleProductDetails product={product} />
          <SingleProductCart product={product} />
        </Grid>
      </Grid>
    </>
  );
};

export default Product;

export async function getServerSideProps(context) {
  let product = await Repo.GET(`products/${context.params.product}`)
    .then((response) => response.data)
    .catch(() => null);
  if (product === null) {
    product = await Repo.GET(`products/name/${context.params.product}`)
      .then((response) => response.data)
      .catch(() => null);
  }
  if (product === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: product,
    },
  };
}
