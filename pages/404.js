import React, { useState } from "react";
import styles from "@/styles/NotFound.module.css";
import Image from "next/image";
import GlobalHead from "@/components/global/GlobalHead";
import { Box, CircularProgress, Grid } from "@mui/material";
import Link from "next/link";
const NotFound = () => {
  const [loading, setLoading] = useState(false);
  const setLoadingHandler = () => {
    setLoading(true);
  };
  return (
    <>
      <GlobalHead title="پیدا نشد! 404" />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          <Image
            src="/images/NotFound.svg"
            alt="Opps! 404 page not found"
            width={450}
            height={450}
          />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          item
          xs={12}
          dir="rtl"
          rowGap={2}
        >
          <h3 className="text-darker">متاسفانه نتیجه ای پیدا نشد !</h3>
          {!loading ? (
            <Link href="/">
              <Box
                component="button"
                width={200}
                height={35}
                className={styles.button}
                onClick={setLoadingHandler}
              >
                بازگشت
              </Box>
            </Link>
          ) : (
            <Box
              component="button"
              width={200}
              height={35}
              className={styles.loadingButton}
            >
              <CircularProgress size={20} className="text-dark" />
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
