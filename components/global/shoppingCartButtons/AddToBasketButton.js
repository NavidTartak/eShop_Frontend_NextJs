import React from "react";
import styles from "./AddToBasketButton.module.css";
const AddToBasketButton = ({ addItem }) => {
  return (
    <div className={styles.button} onClick={addItem}>
      افزودن به سبد
    </div>
  );
};

export default AddToBasketButton;
