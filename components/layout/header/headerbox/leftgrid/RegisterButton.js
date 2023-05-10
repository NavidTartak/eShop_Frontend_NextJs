import React from "react";
import { Box } from "@mui/material";
import styles from "./RegisterButton.module.css";
import { MdLogin } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
const RegisterButton = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const goToLoadingHandler = () => {
    setLoadingButton(true);
  };
  if (!loadingButton) {
    return (
      <Link href={"/login"}>
        <Box
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          height={35}
          className={styles.button}
          columnGap={1}
          onClick={goToLoadingHandler}
        >
          <span>ورود | ثبت نام</span>
          <MdLogin size={25} />
        </Box>
        <Box
          display={{ xs: "flex", md: "none" }}
          justifyContent="center"
          alignItems="center"
          height={35}
          className={styles.respButton}
          columnGap={1}
          onClick={goToLoadingHandler}
        >
          <MdLogin size={25} />
        </Box>
      </Link>
    );
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={35}>
      <CircularProgress size={20} className="text-dark" />
    </Box>
  );
};

export default RegisterButton;
