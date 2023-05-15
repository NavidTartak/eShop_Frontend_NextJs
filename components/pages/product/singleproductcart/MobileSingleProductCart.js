import React from "react";
import styles from "./MobileSingleProductCart.module.css";
import { Box, Grid } from "@mui/material";
import { BsShop } from "react-icons/bs";
import ShoppingCartButton from "@/components/global/ShoppingCartButton";
const MobileSingleProductCart = ({ product }) => {
  return (
    <Box
      display={{ xs: "flex", lg: "none" }}
      className={`${styles.fixedBoxContainer} user-select-none`}
    >
      <Grid
        item
        xs={11}
        className={`${styles.outerFixedContainer} user-select-none`}
        container
        justifyContent="space-between"
        rowGap={2}
      >
        <Grid container alignItems="center" item xs="auto">
          <div className={styles.stockContainer} dir="rtl">
            <BsShop size={20} className={styles.icon} />
            <div className="text-darker font-0-9">
              موجودی :{" "}
              {!product.stock || product.stock <= 0 ? (
                <span className="text-danger">ناموجود</span>
              ) : (
                <span>{product.stock.toLocaleString("fa-IR")} عدد</span>
              )}
            </div>
          </div>
        </Grid>
        <Grid container alignItems="center" item xs="auto">
          <div className={styles.priceContainer} dir="rtl">
            {!product.priceWithDiscount || product.priceWithDiscount <= 0 ? (
              <>
                <div className={styles.emptyPrice}>&nbsp;</div>
                <label className={styles.emptyBadge} dir="ltr">
                  &nbsp;
                </label>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <ShoppingCartButton item={product} />
            <div className={`${styles.stockContainer} text-darker`} dir="rtl">
              {!product.priceWithDiscount || product.priceWithDiscount <= 0 ? (
                <>{product.price.toLocaleString("fa-IR")} تومان</>
              ) : (
                <>{product.priceWithDiscount.toLocaleString("fa-IR")} تومان</>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileSingleProductCart;
