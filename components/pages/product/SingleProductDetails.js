import { Grid, Divider } from "@mui/material";
import React, { useState } from "react";
import styles from "./SingleProductDetails.module.css";
import { BsCalendarCheck, BsStar, BsTextParagraph } from "react-icons/bs";
import { FaAngleLeft, FaTimes } from "react-icons/fa";
const SingleProductDetails = ({ product }) => {
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const changeShowMoreDescClickHandler = () => {
    setShowMoreDesc(!showMoreDesc);
  };
  return (
    <Grid
      item
      xs={11}
      lg={4.4}
      className={`${styles.outerContainer}`}
      container
      flexDirection="column"
      rowGap={2}
      padding={{
        xs: "2vh 5vw",
        sm: "2vh 3vw",
        md: "2vh 1.5vw",
      }}
      marginBottom={{ xs: "14vh", lg: "auto" }}
    >
      <div
        className={`${styles.fieldContainer} text-darker line-height-1-7`}
        dir="rtl"
      >
        {product.name}
      </div>
      <Divider />
      {product.incredibleOffers ? (
        <>
          <div
            className={`${styles.fieldContainer} text-darker user-select-none`}
            dir="rtl"
          >
            <BsStar size={24} className={styles.icon} />
            <div className="text-dark">پیشنهاد شگفت انگیز</div>
          </div>
          <Divider />
        </>
      ) : null}
      {product.dailySuggest ? (
        <>
          <div
            className={`${styles.fieldContainer} text-darker user-select-none`}
            dir="rtl"
          >
            <BsCalendarCheck size={24} className={styles.icon} />
            <div className="text-dark">پیشنهاد روزانه</div>
          </div>
          <Divider />
        </>
      ) : null}
      {product.description ? (
        <>
          <div
            className={`${styles.fieldContainer} text-darker user-select-none`}
            dir="rtl"
          >
            <BsTextParagraph size={24} className={styles.icon} />
            <div className="text-dark">توضیحات : </div>
          </div>
          <div className="text-darker font-0-9 line-height-1-7">
            {!showMoreDesc
              ? product.description.substring(0, 350)
              : product.description}
            {product.description.length <= 350 ? null : !showMoreDesc ? (
              <>
                ...
                <br />
                <span
                  className={`${styles.showMore} user-select-none`}
                  onClick={changeShowMoreDescClickHandler}
                >
                  بیشتر
                  <FaAngleLeft />
                </span>
              </>
            ) : (
              <>
                <br />
                <span
                  className={`${styles.showMore} user-select-none`}
                  onClick={changeShowMoreDescClickHandler}
                >
                  بستن
                  <FaTimes />
                </span>
              </>
            )}
          </div>
        </>
      ) : null}
    </Grid>
  );
};

export default SingleProductDetails;
