import React from "react";
import OurFeature from "./OurFeature";
import PopulerCourses from "./PopulerCourses";
import StartingProcess from "./StartingProcess";
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
      <PopulerCourses />
      <StartingProcess />
    </>
  );
};

export default Home;
