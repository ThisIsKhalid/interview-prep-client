import React from "react";
import {FiSearch} from 'react-icons/fi'

const Blogs = () => {
  return (
    <>
      {/* search nav */}
      <div className="bg-gray-700 py-4 flex items-center justify-center px-5">
        <div className="lg:w-1/2 w-full flex items-center justify-center relative">
          <input
            type="text"
            className="w-4/5 py-2 rounded-lg px-7 focus:outline-red-500 focus:outline-double focus:outline-2 bg-gray-200 text-gray-900 font-medium"
            placeholder="search here"
          />
          <div className="w-12 bg-cyan-600 h-10 absolute top-0 lg:right-[66px] right-[33px] rounded-r-lg"></div>
          <button>
            <FiSearch className="absolute top-3 lg:right-20 right-12 text-gray-900 font-semibold" />
          </button>
        </div>
      </div>
      <div className="pb-20 px-5"></div>;
    </>
  );
};

export default Blogs;
