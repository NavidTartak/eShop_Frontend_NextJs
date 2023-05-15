import GlobalHead from "@/components/global/GlobalHead";
import Cards from "@/components/pages/Cards";
import { Grid } from "@mui/material";
import React from "react";
import * as Repo from "@/repository/AxiosRepository";

const index = ({ products }) => {
  return (
    <>
      <GlobalHead title="محصولات" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="3vh 0"
        rowGap="3vh"
      >
        <Grid item xs={11} dir="rtl">
          <h4 className="text-darker">محصولات</h4>
        </Grid>
        <Grid item xs={11}>
          <Cards items={products} />
        </Grid>
      </Grid>
    </>
  );
};

export default index;
export async function getServerSideProps(context) {
  const products = await Repo.GET("products")
    .then((response) => response.data)
    .catch(() => []);
  return {
    props: {
      products: products,
    },
  };
}
