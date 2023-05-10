import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
const Cards = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className={styles.container} dir="rtl">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return <Card key={i} isSkeleton showBorderRadius />;
        })}
      </div>
    );
  }
  return (
    <div className={styles.container} dir="rtl">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            showIncredibleOffer
            showBorderRadius
            showBoxShadow
          />
        );
      })}
    </div>
  );
};

export default Cards;
