import React from "react";
import DesktopSingleProductCart from "./singleproductcart/DesktopSingleProductCart";
import MobileSingleProductCart from "./singleproductcart/MobileSingleProductCart";

const SingleProductCart = ({ product }) => {
  return (
    <>
      <DesktopSingleProductCart product={product} />
      <MobileSingleProductCart product={product} />
    </>
  );
};

export default SingleProductCart;
