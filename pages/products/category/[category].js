import React from "react";
import * as Repo from "@/repository/AxiosRepository";
import { Grid, Skeleton } from "@mui/material";
import Cards from "@/components/pages/Cards";
import GlobalHead from "@/components/global/GlobalHead";
const Category = ({ category, products }) => {
  return (
    <>
      <GlobalHead title={!category.label ? null : category.label} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="3vh 0"
        rowGap="3vh"
      >
        <Grid item xs={11} dir="rtl">
          {!category.label ? (
            <Skeleton width={200} height={20} />
          ) : (
            <h4 className="text-darker">{category.label}</h4>
          )}
        </Grid>
        <Grid item xs={11}>
          <Cards items={products} />
        </Grid>
      </Grid>
    </>
  );
};

export default Category;
export async function getServerSideProps(context) {
  if (context.params.category === "incredibleOffers") {
    const products = await Repo.GET("products/incredibleOffers")
      .then((response) => response.data)
      .catch(() => []);
    const category =
      products.length === 0
        ? {}
        : {
            label: "پیشنهاد شگفت انگیز",
          };

    return {
      props: {
        category: category,
        products: products,
      },
    };
  }
  const sevenIcons = await Repo.GET("SevenIcons")
    .then((response) => response.data)
    .catch(() => []);
  const category =
    sevenIcons.length === 0
      ? {}
      : sevenIcons.filter((item) => item.url === context.params.category)[0];

  const products = await Repo.GET(`products/${context.params.category}`)
    .then((response) => response.data)
    .catch(() => []);
  return {
    props: {
      category: category,
      products: products,
    },
  };
}
