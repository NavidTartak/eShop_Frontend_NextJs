import React from "react";
import styles from "./ManageBasketButton.module.css";
import { IconButton } from "@mui/material";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  increaseItem,
  removeItemFromCart,
  decreaseItem,
} from "@/redux/features/shoppingcart/ShoppingCartSlice";
const ManageBasketButton = ({ itemId, count }) => {
  const dispatch = useDispatch();
  const increaseHanlder = () => {
    dispatch(increaseItem(itemId));
  };
  const decreaseHandler = () => {
    if (count === 1) {
      dispatch(removeItemFromCart(itemId));
    } else {
      dispatch(decreaseItem(itemId));
    }
  };
  return (
    <div className={styles.container}>
      <IconButton onClick={increaseHanlder}>
        <FaPlus size={20} className="text-darker" />
      </IconButton>
      <label className={`${styles.label} text-darker`}>
        {count.toLocaleString("fa-IR")}
      </label>
      <IconButton onClick={decreaseHandler}>
        {count === 1 ? (
          <FaRegTrashAlt size={20} className="text-danger" />
        ) : (
          <FaMinus size={20} />
        )}
      </IconButton>
    </div>
  );
};

export default ManageBasketButton;
