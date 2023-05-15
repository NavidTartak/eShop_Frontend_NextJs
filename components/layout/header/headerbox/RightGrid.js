import React from "react";
import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import SearchBox from "./rightgrid/SearchBox";
import Link from "next/link";
import styles from "./RightGrid.module.css";
const RightGrid = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      item
      xs={8}
      sm={9}
      md={8}
    >
      <Grid item xs={12}>
        <Stack display="flex" direction="row" alignItems="center">
          <Link href="/" className={styles.link}>
            <Image
              src="/images/footerlogo2.png"
              alt="eSHOP logo"
              width={35}
              height={35}
              className={styles.image}
            />
          </Link>
          <SearchBox />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RightGrid;
