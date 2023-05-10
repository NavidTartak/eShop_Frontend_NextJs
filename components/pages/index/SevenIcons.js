import { Grid, Skeleton } from "@mui/material";
import React from "react";
import styles from "./SevenIcons.module.css";
import Link from "next/link";
import Image from "next/image";
const SevenIcons = ({ items }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" padding="5vh 0">
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        alignContent="space-evenly"
        item
        xs={10}
        rowGap="5vh"
        dir="rtl"
      >
        {items.length === 0 ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <Grid item xs={3} md="auto" key={item}>
                  <div className={`${styles.itemContainer}`}>
                    <Skeleton variant="rounded" height={50} width={50} />
                    <label className={`${styles.label}`}>
                      <Skeleton width={40} />
                    </label>
                  </div>
                </Grid>
              );
            })}
          </>
        ) : (
          <>
            {items.map((item) => {
              return (
                <Grid item xs={3} md="auto" key={item.id}>
                  <Link href={`/products/category/${item.url}`}>
                    <div className={`${styles.itemContainer}`}>
                      <Image
                        src={`/images/${item.iconName}`}
                        height={50}
                        width={50}
                        alt={item.label}
                      />
                      <label className={`${styles.label}`}>{item.label}</label>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default SevenIcons;
