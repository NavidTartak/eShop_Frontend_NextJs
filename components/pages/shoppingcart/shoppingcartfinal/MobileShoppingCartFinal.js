import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useState } from "react";
import styles from "./MobileShoppingCartFinal.module.css";
import { BsBarChart, BsCashStack } from "react-icons/bs";
import { useRouter } from "next/router";
const MobileShoppingCartFinal = ({ basket }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const goToShoppingHandler = async () => {
    setLoading(true);
    await router.push("/shipping");
    setLoading(false);
  };
  return (
    <>
      {basket.totalCount === 0 ? null : (
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
            <Grid item xs={12} sm={5.7}>
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
            </Grid>

            {basket.totalBenefitAmount > 0 ? (
              <Grid item xs={12} sm={5.7}>
                <div
                  className={`${styles.fieldContainer} text-danger font-0-9`}
                  dir="rtl"
                >
                  <div className={styles.flexContainer}>
                    <BsBarChart size={20} className={styles.icon} />
                    <div>سود شما : </div>
                  </div>
                  <div>
                    {basket.totalBenefitAmount.toLocaleString("fa-IR")}
                    {" تومان"}
                  </div>
                </div>
              </Grid>
            ) : null}
            <Grid item xs={12}>
              {!loading ? (
                <Box
                  component={"button"}
                  width={{ xs: "100%", sm: "13em" }}
                  onClick={goToShoppingHandler}
                  className={`${styles.button} font-0-9`}
                >
                  ثبت سفارش
                </Box>
              ) : (
                <Box
                  component={"button"}
                  width={{ xs: "100%", sm: "13em" }}
                  className={`${styles.disabledButton} font-0-9`}
                >
                  <CircularProgress size={20} className="text-dark" />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default MobileShoppingCartFinal;
