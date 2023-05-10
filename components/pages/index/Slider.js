import { Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Slider = ({ items }) => {
  const router = useRouter();
  const slideClickHandler = (e) => {
    const filteredImageArray = items.filter(
      (item) => item.original === e.target.src
    );
    if (filteredImageArray.length === 0 || !filteredImageArray[0].url) {
      return;
    }
    router.push(filteredImageArray[0].url);
  };
  if (items.length === 0) {
    return <Skeleton variant="rectangular" width="100vw" height="20.8333vw" />;
  }
  return (
    <ReactImageGallery
      key={items.id}
      id={items.id}
      autoPlay
      items={items}
      isRTL
      lazyLoad
      slideInterval={3000}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showNav={false}
      onClick={slideClickHandler}
    />
  );
};

export default Slider;
