import React from "react";
import MobileApp from "./MobileApp";
import OurFeature from "./OurFeature";
import PopulerCourses from "./PopulerCourses";
import StartingProcess from "./StartingProcess";
import StatData from "./StatData";
import TopBanner from "./TopBanner";
import CrackInterviewNow from "./CrackInterviewNow";

const Home = () => {
  return (
    <>
      <TopBanner />
      <StatData />
      <CrackInterviewNow />
      <OurFeature />
      <PopulerCourses />
      <StartingProcess />
      <MobileApp />
    </>
  );
};

export default Home;
