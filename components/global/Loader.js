import React from "react";
import styles from "./Loader.module.css";
import Image from "next/image";
const Loader = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Image
          src="/images/footerlogo2.png"
          alt="آویژه"
          width={45}
          height={45}
          className={styles.animation}
          priority
        />
      </div>
    </div>
  );
};

export default Loader;
