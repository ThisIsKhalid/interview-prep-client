import React from "react";
import OurFeature from "./OurFeature";
import StatData from "./StatData";
import TopBanner from "./TopBanner";
import WhatWeProvide from "./WhatWeProvide";

const Home = () => {
  return (
    <>
      <TopBanner />
      <StatData />
      <WhatWeProvide />
      <OurFeature />
    </>
  );
};

export default Home;
