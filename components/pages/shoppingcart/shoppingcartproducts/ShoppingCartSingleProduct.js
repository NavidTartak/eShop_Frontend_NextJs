import React from "react";
import styles from "./ShoppingCartSingleProduct.module.css";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { BsCalendarCheck, BsCardImage, BsStar } from "react-icons/bs";
import ShoppingCartButton from "@/components/global/ShoppingCartButton";
const ShoppingCartSingleProduct = ({ product }) => {
  return (
    <Grid
      item
      xs={12}
      container
      rowGap={2}
      justifyContent="center"
      alignItems="center"
      padding={{
        xs: "2vh 5vw",
        sm: "2vh 3vw",
        md: "2vh 1.5vw",
      }}
      className={styles.container}
    >
      <Grid xs={12} item>
        <div
          className={`${styles.fieldContainer} text-darker line-height-1-7 font-0-9`}
          dir="rtl"
        >
          {product.name}
        </div>
      </Grid>

      <Grid
        item
        xs={5}
        lg={4}
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        rowGap={1}
      >
        {product.indexImageUrl ? (
          <>
            <Box display={{ xs: "none", sm: "block" }}>
              <Image
                src={product.indexImageUrl}
                alt={product.name}
                width={150}
                height={150}
              />
            </Box>
            <Box display={{ xs: "block", sm: "none" }}>
              <Image
                src={product.indexImageUrl}
                alt={product.name}
                width={100}
                height={100}
              />
            </Box>
          </>
        ) : (
          <Box
            width={{ xs: 100, sm: 150 }}
            height={{ xs: 100, sm: 150 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <BsCardImage size={45} className="text-seperator" />
          </Box>
        )}
        <Box display={{ xs: "none", sm: "block" }}>
          <ShoppingCartButton item={product} scale={0.85} />
        </Box>
      </Grid>
      <Grid item xs={7} lg={8} container flexDirection="column" rowGap={1}>
        {product.incredibleOffers ? (
          <>
            <div
              className={`${styles.fieldContainer} text-darker user-select-none font-0-9`}
              dir="rtl"
            >
              <BsStar size={20} className={styles.icon} />
              <div className="text-dark">پیشنهاد شگفت انگیز</div>
            </div>
          </>
        ) : null}
        {product.dailySuggest ? (
          <>
            <div
              className={`${styles.fieldContainer} text-darker user-select-none font-0-9`}
              dir="rtl"
            >
              <BsCalendarCheck size={20} className={styles.icon} />
              <div className="text-dark">پیشنهاد روزانه</div>
            </div>
          </>
        ) : null}

        {product.priceWithDiscount === 0 ? (
          <>
            <div className={styles.priceContainer} dir="rtl">
              <div className={styles.priceEmpty}>&nbsp;</div>
              <label className={styles.badgeEmpty} dir="ltr">
                &nbsp;
              </label>
            </div>
            <div dir="rtl" className={styles.priceWithDiscount}>
              {product.price.toLocaleString("fa-IR")} تومان
            </div>
          </>
        ) : (
          <>
            <div className={styles.priceContainer} dir="rtl">
              <div className={styles.price}>
                {product.price.toLocaleString("fa-IR")} تومان
              </div>
              <label className={styles.badge} dir="ltr">
                {Number(
                  Math.floor(
                    ((product.price - product.priceWithDiscount) /
                      product.price) *
                      100
                  )
                ).toLocaleString("fa-IR")}{" "}
                %
              </label>
            </div>
            <div dir="rtl" className={styles.priceWithDiscount}>
              {product.priceWithDiscount.toLocaleString("fa-IR")} تومان
            </div>
          </>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        display={{ xs: "flex", sm: "none" }}
      >
        <ShoppingCartButton item={product} scale={0.9} />
      </Grid>
    </Grid>
  );
};

export default ShoppingCartSingleProduct;
