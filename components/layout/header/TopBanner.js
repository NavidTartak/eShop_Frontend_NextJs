import React, { useEffect, useState } from "react";
import styles from "./TopBanner.module.css";
import * as Repo from "@/repository/AxiosRepository";
import { Skeleton, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TopBanner = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Repo.GET("topBanner")
      .then((response) => setData(response.data))
      .catch(() => setData(null));
  }, []);
  return (
    <>
      {!data ? (
        <Box
          height={{ xs: "5vh", sm: "6vh", md: "7vh" }}
          className={`${styles.positionRelative} ${styles.bgWhite}`}
        >
          <Skeleton variant="rectangular" className={styles.skeleton} />
        </Box>
      ) : (
        <>
          {!data.url ? (
            <Box
              className={`${styles.positionRelative}`}
              height={{ xs: "5vh", sm: "6vh", md: "7vh" }}
            >
              <Image
                src={data.imageUrl}
                alt="top banner"
                loading="lazy"
                fill
                className={styles.image}
              />
            </Box>
          ) : (
            <Link href={data.url} draggable={false}>
              <Box
                className={`${styles.positionRelative}`}
                height={{ xs: "5vh", sm: "6vh", md: "7vh" }}
              >
                <Image
                  src={data.imageUrl}
                  alt="top banner"
                  loading="lazy"
                  fill
                  className={styles.image}
                  draggable={false}
                />
              </Box>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default TopBanner;
