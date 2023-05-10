import React from "react";
import { useSelector } from "react-redux";
import AddToBasketButton from "./shoppingCartButtons/AddToBasketButton";
import ManageBasketButton from "./shoppingCartButtons/ManageBasketButton";
import styles from "./ShoppingCartButton.module.css";
const ShoppingCartButton = ({ item }) => {
  const shoppingCart = useSelector((state) => state.shoppingcart);
  let count = 0;
  if (shoppingCart.items.some((p) => p.id === item.id)) {
    count = shoppingCart.items.filter((p) => p.id === item.id)[0].count;
  }
  return (
    <div className={styles.container} dir="rtl">
      {!item.stock || item.stock <= 0 ? (
        <div className={`${styles.outOfStock} text-danger`}>ناموجود</div>
      ) : (
        <>
          {!shoppingCart.items.some((p) => p.id === item.id) ? (
            <AddToBasketButton item={item} />
          ) : (
            <ManageBasketButton itemId={item.id} count={count} />
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingCartButton;
