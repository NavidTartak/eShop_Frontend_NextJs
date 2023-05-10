import React from "react";
import * as Repo from "@/repository/AxiosRepository";
import GlobalHead from "@/components/global/GlobalHead";
import { Grid, Skeleton } from "@mui/material";
import Cards from "@/components/pages/Cards";
import { BiSearchAlt } from "react-icons/bi";
const Search = ({ textToSearch, products }) => {
  return (
    <>
      <GlobalHead title="جستجوی کالا" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="3vh 0"
        rowGap="3vh"
      >
        <Grid item xs={11} dir="rtl">
          {!products ? (
            <Skeleton width={200} height={20} />
          ) : (
            <h4 className="text-darker">جستجوی کالای : {textToSearch}</h4>
          )}
        </Grid>
        <Grid item xs={11}>
          {!products ? (
            <Cards items={[]} />
          ) : products.length === 0 ? (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
              columnGap={2}
              dir="rtl"
            >
              <BiSearchAlt size={35} className="text-danger" />
              <h3 className="text-darker">
                کالایی با مشخصات جستجو شده پیدا نشد !
              </h3>
            </Grid>
          ) : (
            <Cards items={products} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const products = await Repo.GET(
    `products/search/${context.params.textToSearch}`
  )
    .then((response) => response.data)
    .catch(() => null);
  return {
    props: {
      textToSearch: context.params.textToSearch,
      products: products,
    },
  };
}
