import React from "react";
import styles from "./DesktopSingleProductCart.module.css";
import { Divider, Grid } from "@mui/material";
import { BsCashStack, BsShop } from "react-icons/bs";
import ShoppingCartButton from "@/components/global/ShoppingCartButton";
const DesktopSingleProductCart = ({ product }) => {
  return (
    <Grid
      item
      xs={11}
      lg={2.9}
      display={{ xs: "none", lg: "flex" }}
      className={`${styles.outerContainer} user-select-none`}
      container
      flexDirection="column"
      rowGap={2}
    >
      <div className={styles.stockContainer} dir="rtl">
        <BsShop size={24} className={styles.icon} />
        <div className="text-darker">
          موجودی :{" "}
          {!product.stock || product.stock <= 0 ? (
            <span className="text-danger">ناموجود</span>
          ) : (
            <span>{product.stock.toLocaleString("fa-IR")} عدد</span>
          )}
        </div>
      </div>
      <Divider />
      <div className={styles.stockContainer} dir="rtl">
        <BsCashStack size={24} className={styles.icon} />
        <div className="text-darker">قیمت محصول : </div>
      </div>
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
      <div className={`${styles.stockContainer} text-darker`} dir="rtl">
        {!product.priceWithDiscount || product.priceWithDiscount <= 0 ? (
          <>{product.price.toLocaleString("fa-IR")} تومان</>
        ) : (
          <>{product.priceWithDiscount.toLocaleString("fa-IR")} تومان</>
        )}
      </div>
      <Divider />
      <div className={styles.stockContainer} dir="rtl">
        <ShoppingCartButton item={product} />
      </div>
    </Grid>
  );
};

export default DesktopSingleProductCart;
