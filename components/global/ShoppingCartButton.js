import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToBasketButton from "./shoppingCartButtons/AddToBasketButton";
import ManageBasketButton from "./shoppingCartButtons/ManageBasketButton";
import styles from "./ShoppingCartButton.module.css";
import { addItemToCart } from "@/redux/features/shoppingcart/ShoppingCartSlice";
const ShoppingCartButton = ({ item, scale }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingcart);
  const addItem = useCallback(() => {
    addItemClickHandler();
  }, []);
  const addItemClickHandler = () => {
    dispatch(addItemToCart(item));
  };

  let count = 0;
  if (shoppingCart.items.some((p) => p.id === item.id)) {
    count = shoppingCart.items.filter((p) => p.id === item.id)[0].count;
  }

  return (
    <div
      style={!scale ? {} : { transform: `scale(${scale})` }}
      className={styles.container}
      dir="rtl"
    >
      {!item.stock || item.stock <= 0 ? (
        <div className={`${styles.outOfStock} text-danger`}>ناموجود</div>
      ) : (
        <>
          {!shoppingCart.items.some((p) => p.id === item.id) ? (
            <AddToBasketButton addItem={addItem} />
          ) : (
            <ManageBasketButton itemId={item.id} count={count} />
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingCartButton;
