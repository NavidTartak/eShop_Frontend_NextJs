import { Box } from "@mui/material";
import React from "react";
import styles from "./MobileShoppingCartFinal.module.css";
const MobileShoppingCartFinal = ({ basket }) => {
  return (
    <>
      {basket.totalCount === 0 ? null : (
        <Box
          display={{ xs: "flex", lg: "none" }}
          className={`${styles.fixedBoxContainer} user-select-none`}
        >
          1
        </Box>
      )}
    </>
  );
};

export default MobileShoppingCartFinal;
