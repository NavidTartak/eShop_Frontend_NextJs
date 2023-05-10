import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Box, Skeleton } from "@mui/material";
import Link from "next/link";
import ShoppingCartButton from "../global/ShoppingCartButton";
const Card = ({
  item,
  showIncredibleOffer,
  showBorderRadius,
  showBoxShadow,
  className,
  isSkeleton,
  scale,
}) => {
  let finalClassName = `${styles.cardContainer}`;
  if (showBorderRadius) {
    finalClassName += ` ${styles.borderRadius}`;
  }
  if (showBoxShadow) {
    finalClassName += ` ${styles.boxShadow}`;
  }
  if (className) {
    finalClassName += ` ${className}`;
  }
  if (isSkeleton) {
    return (
      <div
        className={
          !showBorderRadius
            ? `${styles.cardContainer} ${styles.borderSkeleton}`
            : `${styles.cardContainer} ${styles.borderSkeleton} ${styles.borderRadius}`
        }
        style={!scale ? {} : { transform: `scale(${scale})` }}
      >
        <div className={styles.link}>
          <Box component="div" width={150} height={13}></Box>
          <div className={styles.name}>
            <Skeleton />
          </div>
          <Skeleton variant="rectangular" width={170} height={170} />
          <div className={styles.priceContainer} dir="rtl">
            <div className={styles.priceEmpty}>
              <Skeleton width={90} />
            </div>
            <label className={styles.badgeEmpty} dir="ltr">
              <Skeleton width={20} />
            </label>
          </div>
          <div className={styles.priceWithDiscount}>
            <Skeleton width={100} />
          </div>
        </div>
        <div className={styles.basketContainer}>
          <Skeleton variant="rounded" width={200} height={35} />
        </div>
      </div>
    );
  }
  return (
    <div
      style={!scale ? {} : { transform: `scale(${scale})` }}
      className={finalClassName}
      title={item.name}
    >
      <Link className={styles.link} href={`/products/${item.id}`} dir="rtl">
        {!showIncredibleOffer ? null : item.incredibleOffers ? (
          <Image
            alt="incredible offer"
            src="/images/IncredibleOffer.svg"
            width={150}
            height={13}
          />
        ) : (
          <Box component="div" width={150} height={13}></Box>
        )}
        <div className={styles.name}>
          {item.name.substring(0, 30)}
          {item.name.length > 30 ? "..." : null}
        </div>
        <Image
          alt={item.name}
          src={item.indexImageUrl}
          width={170}
          height={170}
        />
        {item.priceWithDiscount === 0 ? (
          <>
            <div className={styles.priceContainer} dir="rtl">
              <div className={styles.priceEmpty}>&nbsp;</div>
              <label className={styles.badgeEmpty} dir="ltr">
                &nbsp;
              </label>
            </div>
            <div className={styles.priceWithDiscount}>
              {item.price.toLocaleString("fa-IR")} تومان
            </div>
          </>
        ) : (
          <>
            <div className={styles.priceContainer} dir="rtl">
              <div className={styles.price}>
                {item.price.toLocaleString("fa-IR")} تومان
              </div>
              <label className={styles.badge} dir="ltr">
                {Number(
                  Math.floor(
                    ((item.price - item.priceWithDiscount) / item.price) * 100
                  )
                ).toLocaleString("fa-IR")}{" "}
                %
              </label>
            </div>
            <div className={styles.priceWithDiscount}>
              {item.priceWithDiscount.toLocaleString("fa-IR")} تومان
            </div>
          </>
        )}
      </Link>
      <div className={styles.basketContainer}>
        <ShoppingCartButton item={item} />
      </div>
    </div>
  );
};

export default Card;
