import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./CaruselArrow.module.css";
export function NextArrow({ className, style, onClick, width, height }) {
  return (
    <FaAngleRight
      className={`${styles.arrow} ${styles.nextArrow} ${className}`}
      style={{
        ...style,
        width: width,
        height: height,
      }}
      onClick={onClick}
    />
  );
}
export function PrevArrow({ className, style, onClick, width, height }) {
  return (
    <FaAngleLeft
      className={`${styles.arrow} ${styles.prevArrow} ${className}`}
      style={{
        ...style,
        width: width,
        height: height,
      }}
      onClick={onClick}
    />
  );
}
