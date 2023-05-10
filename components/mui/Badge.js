import React from "react";
import styles from "./Badge.module.css";
const Badge = ({ children, content, isCircle }) => {
  return (
    <div className={styles.container}>
      {children}
      {!isCircle ? (
        <>{!content ? null : <div className={styles.badge}>{content}</div>}</>
      ) : (
        <div className={styles.circleBadge}></div>
      )}
    </div>
  );
};

export default Badge;
