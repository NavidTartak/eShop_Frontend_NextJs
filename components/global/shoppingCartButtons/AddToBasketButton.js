import React from "react";
import styles from "./AddToBasketButton.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/shoppingcart/ShoppingCartSlice";
const AddToBasketButton = ({ item }) => {
  const dispatch = useDispatch();
  const addItemClickHandler = () => {
    dispatch(addItemToCart(item));
  };
  return (
    <div className={styles.button} onClick={addItemClickHandler}>
      افزودن به سبد
    </div>
  );
};

export default AddToBasketButton;
