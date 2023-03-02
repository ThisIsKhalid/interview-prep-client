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
          {/* <div className="lg:w-3/4 w-full mx-auto">
            <Lottie animationData={onlinePrep} loop={true} />
          </div> */}
          <div className="flex flex-col items-center justify-center mt-14 px-5">
            <input
              className="lg:w-1/2 w-full bg-gray-100 py-3 px-5 rounded-md text-lg focus:outline-none focus:bg-gray-700 text-gray-900 font-medium focus:text-[#FFCD70] transition-colors duration-300 placeholder:text-gray-400 placeholder:font-medium placeholder:text-center text-center focus:placeholder:text-transparent"
              type="email"
              required
              placeholder="example@gmail.com"
            />
            <button className="lg:w-1/2 w-full flex items-center justify-center gap-2 lg:text-lg text-base font-semibold border-2 border-gray-900 px-4 py-3 rounded-md  hover:bg-gray-800 hover:text-[#FFCD70] transition-colors delay-75 duration-300 uppercase mt-5">
              Join Now to get free access <FiArrowUpRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>

      {/* border wave shape */}
      {/* #FFCD70 */}
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFCD70"
            fill-opacity="1"
            d="M0,320L34.3,288C68.6,256,137,192,206,176C274.3,160,343,192,411,181.3C480,171,549,117,617,122.7C685.7,128,754,192,823,229.3C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,149.3C1302.9,139,1371,181,1406,202.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default TopBanner;
