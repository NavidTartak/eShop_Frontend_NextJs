import React from "react";
import { Box } from "@mui/material";
import styles from "./RegisterButton.module.css";
import { MdLogin } from "react-icons/md";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
const RegisterButton = () => {
  const [loadingButton, setLoadingButton] = useState(false);
  const router = useRouter();
  const goToLoginHandler = async () => {
    setLoadingButton(true);
    await router.push("/login");
    setLoadingButton(false);
  };
  if (!loadingButton) {
    return (
      <>
        <Box
          display={{ xs: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          height={35}
          className={styles.button}
          columnGap={1}
          onClick={goToLoginHandler}
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
          onClick={goToLoginHandler}
        >
          <MdLogin size={25} />
        </Box>
      </>
    );
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={35}>
      <CircularProgress size={20} className="text-dark" />
    </Box>
  );
};

export default RegisterButton;
