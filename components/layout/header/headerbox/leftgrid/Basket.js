import React from "react";

import { MdShoppingCart } from "react-icons/md";
import Badge from "@/components/mui/Badge";
import Link from "next/link";
import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
const Basket = () => {
  const shoppingCart = useSelector((state) => state.shoppingcart);
  return (
    <Link className={styles.link} href={"/shoppingcart"}>
      <Badge
        content={
          shoppingCart.totalCount <= 0
            ? ""
            : shoppingCart.totalCount >= 99
            ? Number(99).toLocaleString("fa-IR")
            : shoppingCart.totalCount.toLocaleString("fa-IR")
        }
      >
        <MdShoppingCart className={styles.icon} size={25} />
      </Badge>
    </Link>
  );
};

export default Basket;
