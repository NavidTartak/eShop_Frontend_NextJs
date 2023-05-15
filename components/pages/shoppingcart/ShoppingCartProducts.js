import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./ShoppingCartProducts.module.css";
import { BsBasket } from "react-icons/bs";
import Link from "next/link";
import ShoppingCartSingleProduct from "./shoppingcartproducts/ShoppingCartSingleProduct";
const ShoppingCartProducts = () => {
  const basket = useSelector((state) => state.shoppingcart);
  return (
    <>
      {basket.totalCount === 0 ? (
        <Grid
          item
          xs={11}
          lg={8.8}
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          className={`${styles.container} user-select-none`}
          rowGap={3}
          minHeight="15em"
          marginBottom={{ xs: "14vh", lg: "auto" }}
        >
          <BsBasket size={75} className="text-seperator" />
          <h4 className="text-darker">سبد خرید شما خالی است !</h4>
          <Box
            component="div"
            justifyContent="center"
            display={{ xs: "flex", lg: "none" }}
          >
            <span className="text-dark font-0-9">
              برای مشاهده محصولات{" "}
              <Link href="/products" className={styles.link}>
                اینجا
              </Link>{" "}
              را کلیک کنید.
            </span>
          </Box>
        </Grid>
      ) : (
        <Grid
          className="user-select-none"
          item
          xs={11}
          lg={8.8}
          container
          flexDirection="column"
          rowGap={2}
          padding={{
            xs: "2vh 5vw",
            sm: "2vh 3vw",
            md: "2vh 1.5vw",
          }}
          marginBottom={{ xs: "16vh", sm: "14vh", lg: "auto" }}
        >
          <div
            className={`${styles.fieldContainer} text-darker line-height-1-7`}
            dir="rtl"
          >
            <BsBasket size={24} className={styles.icon} />
            <div className="text-dark">
              تعداد کالا : {basket.items.length.toLocaleString("fa-IR")}
            </div>
          </div>
          <Divider />
          {basket.items.map((item) => {
            return <ShoppingCartSingleProduct key={item.id} product={item} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default ShoppingCartProducts;
