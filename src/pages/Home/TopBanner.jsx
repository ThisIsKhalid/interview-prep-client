import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import bannerImg from "../../assets/images/Coding-workshop.png";

const TopBanner = () => {
  return (
    <section className="top-banner h-full pt-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="mb-6">
              <h1 className="text-7xl text-gray-900 leading-tight font-medium">
                Improve Your <br />{" "}
                <span className="bg-gray-900 text-[#FFCD70] px-5 py-1 rounded-full italic">
                  Skills
                </span>{" "}
                Faster
              </h1>
            </div>
            <div>
              <p className="text-xl w-5/6 mb-6 leading-normal text-gray-700">
                Speed Up The Skill Acquisition Process By Finding Unlimited
                Courses That Matches Your Niche.
              </p>
              <button className="flex items-center gap-2 text-lg font-medium border border-gray-900 px-4 py-3 rounded-full  hover:bg-gray-800 hover:text-[#FFCD70]">
                Enroll Now <FiArrowUpRight className="text-xl" />
              </button>
            </div>
          </div>
          <div>
            <img className="w-full" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
