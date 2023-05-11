import { Grid, Divider } from "@mui/material";
import React from "react";
import styles from "./SingleProductDetails.module.css";
const SingleProductDetails = ({ product }) => {
  return (
    <Grid
      item
      xs={11}
      md={3.9}
      lg={4.4}
      className={`${styles.outerContainer}`}
      container
      flexDirection="column"
      rowGap={2}
    >
      <div className={`${styles.fieldContainer} text-darker`} dir="rtl">
        {product.name}
      </div>
      <Divider />
    </Grid>
  );
};

export default SingleProductDetails;
