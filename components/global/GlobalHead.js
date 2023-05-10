import React from "react";
import Head from "next/head";
const GlobalHead = ({ title }) => {
  return (
    <Head>
      <title>{!title ? "فروشگاه اینترنتی eSHOP" : `eSHOP | ${title}`}</title>
      <meta name="description" content="فروشگاه اینترنتی eShop" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="eSHOP , ای شاپ , فروشگاه اینترنتی , فروشگاه اینترنتی ای شاپ , فروشگاه اینترنتی eSHOP"
      />
      <meta name="author" content="Navid Tartak , نوید ترتک" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default GlobalHead;
