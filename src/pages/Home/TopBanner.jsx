import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import bannerImg from "../../assets/images/Coding-workshop.png";
import onlinePrep from "../../assets/images/onlinePrep.json";
import Lottie from "lottie-react";

const TopBanner = () => {
  return (
    <section className="top-banner h-full w-full pt-40">
      <div className="container mx-auto">
        {/* top banner up */}
        <div className="grid lg:grid-cols-2 items-center px-5 lg:p-0">
          <div className="">
            <h1 className="lg:text-7xl text-5xl text-gray-900 leading-tight font-medium">
              Improve Your <br />{" "}
              <span className="bg-gray-900 text-[#FFCD70] px-5 py-1 rounded-full italic">
                Skills
              </span>{" "}
              Faster
            </h1>
          </div>
          <div>
            <p className="lg:text-xl text-base lg:w-5/6 w-full mt-6 lg:mt-0 mb-6 leading-normal text-gray-700">
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
