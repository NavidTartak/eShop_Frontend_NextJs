import React from "react";
import TopBanner from "./header/TopBanner";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Box } from "@mui/material";
import createCache from "@emotion/cache";
import styles from "./Layout.module.css";
import HeaderBox from "./header/HeaderBox";
const theme = createTheme({
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const Layout = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className={`${styles.outerContainer}`}>
          <TopBanner />
          <HeaderBox />
        </div>
        <Box paddingTop={{ xs: "12vh", sm: "13vh", md: "14vh" }}>
          {children}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Layout;
