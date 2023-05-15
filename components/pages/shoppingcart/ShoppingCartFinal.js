import React from "react";
import DesktopShoppingCartFinal from "./shoppingcartfinal/DesktopShoppingCartFinal";
import { useSelector } from "react-redux";
import MobileShoppingCartFinal from "./shoppingcartfinal/MobileShoppingCartFinal";

const ShoppingCartFinal = () => {
  const basket = useSelector((state) => state.shoppingcart);
  return (
    <>
      <DesktopShoppingCartFinal basket={basket} />
      <MobileShoppingCartFinal basket={basket} />
    </>
  );
};

export default ShoppingCartFinal;
