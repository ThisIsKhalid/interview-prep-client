import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import onlinePrep from "../../assets/images/onlinePrep.json";
import Lottie from "lottie-react";

const TopBanner = () => {
  return (
    <>
      <section className="top-banner h-full w-full pt-10">
        <div className="container mx-auto">

          {/* top banner up-2 */}
          <div className="lg:mt-10 lg:text-5xl text-4xl text-gray-900 font-light text-center px-5 lg:p-0">
            <h1 className="flex flex-col lg:flex-row items-center justify-center gap-3">
              <span className=" line-through">A Better</span>{" "}
              <span className="lg:text-6xl text-5xl font-bold">
                The Only Way{" "}
              </span>
              to Preparetion for
            </h1>
            <h1 className="font-medium lg:mt-6 mt-3">Front-End Interviews</h1>
          </div>

          {/* top banner down */}
          <div className="lg:w-3/4 w-full mx-auto">
            <Lottie animationData={onlinePrep} loop={true} />
          </div>
        </div>
      </section>

      {/* border wave shape */}
      <div className="lg:-mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFCD70"
            fill-opacity="1"
            d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,245.3C672,288,768,288,864,261.3C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default TopBanner;
