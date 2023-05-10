import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CaruselArrow";
const Carousel = ({ count, children }) => {
  const settings = {
    className: "innerSliderDiv",
    adaptiveHeight: true,
    speed: 1000,
    centerMode: true,
    centerPadding: "1px",
    swipeToSlide: true,
    rtl: true,
    slidesToShow: !count.xl ? 4 : count.xl,
    slidesToScroll: 1,
    prevArrow: <NextArrow width={30} height={30} />,
    nextArrow: <PrevArrow width={30} height={30} />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: !count.xs ? 1 : count.xs,
          speed: 500,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: !count.sm ? 1 : count.sm,
          speed: 500,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: !count.md ? 2 : count.md,
          speed: 700,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: !count.lg ? 3 : count.lg,
          speed: 800,
          adaptiveHeight: true,
          slidesToScroll: 1,
          centerPadding: "1px",
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      autoplay={true}
      autoplaySpeed={2000}
      focusOnSelect={false}
      rtl
      slidesToScroll={1}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
