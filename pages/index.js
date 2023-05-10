import Slider from "@/components/pages/index/Slider";
import React from "react";
import * as Repo from "@/repository/AxiosRepository";
import SevenIcons from "@/components/pages/index/SevenIcons";
import GlobalHead from "@/components/global/GlobalHead";
import IncredibleOffersCarousel from "@/components/pages/index/IncredibleOffersCarousel";
const Home = ({ slider, sevenIcons, incredibleOffers }) => {
  return (
    <>
      <GlobalHead />
      <Slider items={slider} />
      <SevenIcons items={sevenIcons} />
      <IncredibleOffersCarousel items={incredibleOffers} />
    </>
  );
};

export default Home;
export async function getStaticProps(context) {
  const slider = await Repo.GET("public/mainSlider")
    .then((response) => response.data)
    .catch(() => []);
  const sevenIcons = await Repo.GET("SevenIcons")
    .then((response) => response.data)
    .catch(() => []);
  const incredibleOffers = await Repo.GET("products/incredibleOffers")
    .then((response) => response.data)
    .catch(() => []);

  return {
    props: {
      slider: slider,
      sevenIcons: sevenIcons,
      incredibleOffers: incredibleOffers,
    },
    revalidate: 600,
  };
}
