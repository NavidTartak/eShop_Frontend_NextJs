import { Grid } from "@mui/material";
import React from "react";
import styles from "./IncredibleOffersCarousel.module.css";
import Carousel from "@/components/global/Carousel";
import Card from "../Card";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
const IncredibleOffersCarousel = ({ items }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={styles.outerContainer}
        item
        xs={10}
        dir="rtl"
        padding={{ xs: "2vh 2px", md: "0 2px" }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
        >
          <Image
            alt="incredible offers"
            src="/images/amazingTypo.png"
            width={90}
            height={80}
          />
          <Image
            alt="incredible offers"
            src="/images/box.png"
            width={110}
            height={110}
          />
          <Link
            href="/products/category/incredibleOffers"
            className={styles.viewAll}
            dir="rtl"
          >
            <h3>مشاهده همه</h3>&nbsp;
            <FaAngleLeft size={23} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={10}>
          {items.length === 0 ? (
            <Carousel count={{ xl: 5, lg: 4, md: 2.5, sm: 1.5, xs: 1 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                return <Card scale={0.8} key={i} isSkeleton />;
              })}
            </Carousel>
          ) : (
            <Carousel count={{ xl: 5, lg: 4, md: 2.5, sm: 1.5, xs: 1 }}>
              {items.map((item) => {
                return <Card scale={0.8} key={item.id} item={item} />;
              })}
            </Carousel>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IncredibleOffersCarousel;
