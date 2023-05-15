import { Divider, Grid } from "@mui/material";
import React from "react";
import styles from "./SingleProductImageGallery.module.css";
import { BsCardImage } from "react-icons/bs";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
const SingleProductImageGallery = ({ product }) => {
  const images =
    product.images.length === 0
      ? !product.indexImageUrl
        ? []
        : [
            {
              id: 0,
              original: product.indexImageUrl,
              thumbnail: product.indexImageUrl,
            },
          ]
      : !product.indexImageUrl
      ? product.images
      : [
          {
            id: 0,
            original: product.indexImageUrl,
            thumbnail: product.indexImageUrl,
          },
          ...product.images,
        ];
  return (
    <Grid
      item
      xs={11}
      lg={4.4}
      className={`${styles.outerContainer}`}
      container
      flexDirection="column"
      justifyContent="center"
      rowGap={2}
      padding={{
        xs: "2vh 5vw",
        sm: "2vh 3vw",
        md: "2vh 1.5vw",
      }}
    >
      <div className={styles.fieldContainer} dir="rtl">
        <BsCardImage size={24} className={styles.icon} />
        <div className="text-dark">تصاویر</div>
      </div>
      <Divider />
      <Grid item xs={11} margin="auto auto">
        {images.length === 0 ? (
          <div className={styles.emptyImage}>
            <BsCardImage size={75} className="text-seperator" />
          </div>
        ) : (
          <ReactImageGallery
            key={images.id}
            id={images.id}
            autoPlay={false}
            items={images}
            isRTL
            lazyLoad
            showThumbnails={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SingleProductImageGallery;
