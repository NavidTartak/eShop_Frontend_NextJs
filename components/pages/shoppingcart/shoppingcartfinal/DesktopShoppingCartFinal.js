import { CircularProgress, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./DesktopShoppingCartFinal.module.css";
import Link from "next/link";
import { BsCashStack, BsBarChart } from "react-icons/bs";
import { useRouter } from "next/router";
const DesktopShoppingCartFinal = ({ basket }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const goToShoppingHandler = async () => {
    setLoading(true);
    await router.push("/shopping");
    setLoading(false);
  };
  return (
    <>
      {basket.totalCount === 0 ? (
        <Grid
          item
          xs={11}
          lg={2.9}
          display={{ xs: "none", lg: "flex" }}
          className={`${styles.outerContainer} user-select-none`}
          justifyContent="center"
          alignItems="center"
          minHeight="13vh"
          container
          rowGap={2}
        >
          <span className="text-dark font-0-9">
            برای مشاهده محصولات{" "}
            <Link href="/products" className={styles.link}>
              اینجا
            </Link>{" "}
            را کلیک کنید.
          </span>
        </Grid>
      ) : (
        <Grid
          item
          xs={11}
          lg={2.9}
          display={{ xs: "none", lg: "flex" }}
          className={`${styles.outerContainer} user-select-none`}
          padding="2vh 1.5vw"
          container
          flexDirection="column"
          rowGap={2}
        >
          <h5
            className={`${styles.fieldContainer} text-darker font-0-9`}
            dir="rtl"
          >
            <div className={styles.flexContainer}>
              <BsCashStack size={20} className={styles.icon} />
              <div>جمع سبد خرید : </div>
            </div>
            <div>
              {basket.totalAmount.toLocaleString("fa-IR")}
              {" تومان"}
            </div>
          </h5>
          <Divider />
          {basket.totalBenefitAmount > 0 ? (
            <>
              <div
                className={`${styles.fieldContainer} text-danger font-0-9`}
                dir="rtl"
              >
                <div className={styles.flexContainer}>
                  <BsBarChart size={20} className={styles.icon} />
                  <div>سود شما از خرید : </div>
                </div>
                <div>
                  {basket.totalBenefitAmount.toLocaleString("fa-IR")}
                  {" تومان"}
                </div>
              </div>
              <Divider />
            </>
          ) : null}
          {!loading ? (
            <button onClick={goToShoppingHandler} className={styles.button}>
              ثبت سفارش
            </button>
          ) : (
            <button className={styles.disabledButton}>
              <CircularProgress size={20} className="text-dark" />
            </button>
          )}
        </Grid>
      )}
    </>
  );
};

export default DesktopShoppingCartFinal;
