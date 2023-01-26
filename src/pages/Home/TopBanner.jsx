import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import onlinePrep from "../../assets/images/onlinePrep.json";
import Lottie from "lottie-react";

const TopBanner = () => {
  return (
    <section className="top-banner h-full w-full pt-10">
      <div className="container mx-auto">
        {/* top banner up */}
        <div className="grid lg:grid-cols-2 items-center px-5 lg:p-0">
          <div className="lg:text-5xl text-4xl text-center lg:text-left text-gray-900 font-light flex flex-col gap-2">
            <h2 className=" line-through">A Better</h2>
            <h1 className="lg:text-6xl text-5xl font-bold">The Only Way</h1>
            <h2>to Preparetion for</h2>
            <h1 className="font-medium">Front-End Interviews</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <p className="lg:text-xl text-base lg:w-5/6 w-full mt-6 lg:mt-0 leading-normal text-gray-700">
              Speed Up The Skill Acquisition Process By Finding Unlimited
              Courses That Matches Your Niche.
            </p>
            <button className="flex items-center gap-2 text-lg font-medium border border-gray-900 px-4 py-3 rounded-full  hover:bg-gray-800 hover:text-[#FFCD70]">
              Enroll Now <FiArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* top banner down */}
        <div className="lg:w-3/4 w-full mx-auto">
          <Lottie animationData={onlinePrep} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
