import GlobalHead from "@/components/global/GlobalHead";
import Login from "@/components/pages/login/Login";
import { Grid } from "@mui/material";
import React from "react";

const index = ({ prevRoute }) => {
  console.log(prevRoute);
  return (
    <>
      <GlobalHead />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Login prevRoute={prevRoute} />
      </Grid>
    </>
  );
};

export default index;
export async function getServerSideProps(context) {
  return {
    props: {
      prevRoute: context.req.headers.referer,
    },
  };
}
