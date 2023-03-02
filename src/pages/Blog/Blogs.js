import React from "react";
import {FiSearch} from 'react-icons/fi'

const Blogs = () => {
  return (
    <>
      {/* search nav */}
      <div className="bg-gray-700 py-4 flex items-center justify-between px-5">
        <div className="lg:w-1/2 w-full relative">
          <input
            type="text"
            className="w-4/5 py-2 rounded-lg px-7 focus:outline-[#FFCD70] focus:outline-double focus:outline-2 bg-gray-200 text-gray-900 font-medium"
            placeholder="search here"
          />
          <div className="w-14 bg-[#FFCD70] h-10 absolute top-0 right-[20%] rounded-r-lg"></div>
          <button>
            <FiSearch className="absolute top-3 right-[23%] text-gray-900 text-lg" />
          </button>
        </div>
        <button className="bg-[#FFCD70] md:py-2 px-5 md:text-base text-sm rounded-lg font-medium text-gray-900">
          Create Blog
        </button>
      </div>
      <div className="pb-20 px-5 border border-red-600"></div>
    </>
  );
};

export default Blogs;
