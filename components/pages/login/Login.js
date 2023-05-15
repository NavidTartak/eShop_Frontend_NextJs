import React from "react";
import { Grid } from "@mui/material";
import styles from "./Login.module.css";
import Image from "next/image";
import Input from "@/components/mui/Input";
const Login = ({ prevRoute }) => {
  return (
    <Grid
      container
      item
      xs={11}
      md={6.5}
      lg={4}
      xl={3.5}
      className={`${styles.box} user-select-none`}
      padding="3em 2em"
      flexDirection="column"
      justifyContent="center"
      dir="rtl"
      rowGap={3.5}
      component={"form"}
    >
      <Image
        alt="فروشگاه اینترنتی eShop"
        src="/images/logo.svg"
        width={160}
        height={40}
        className="margin-auto-auto"
      />
      <h4 className="text-darker">ورود | ثبت نام</h4>
      <p className="text-dark font-0-9">لطفا شماره موبایل خود را وارد کنید</p>
      <Input
        dir="ltr"
        // error
        helperText=" "
      />
      <button type="submit" className={styles.button}>
        ورود
      </button>
    </Grid>
  );
};
export default Login;
