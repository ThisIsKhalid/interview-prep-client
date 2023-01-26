import React from "react";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const Course1 = () => {
  return (
    <div className="h-full p-5 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=740&t=st=1674493087~exp=1674493687~hmac=0f2f0a980bb5295bb002f9bd9d3505ba294624f186693ae88ccfb5ccd81c8f56"
          alt=""
        />
      </div>
      <div className="mb-2 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FFCD70]" />
          <p className="text-gray-900">4.9</p>
          <p className="text-gray-500">(430 reviews)</p>
        </div>
        <div className="flex items-center gap-1">
          <FiClock />
          <p>02.33.35</p>
        </div>
      </div>
      <h3 className="text-2xl font-medium mb-6">
        Top JavaScript Interview Question
      </h3>
      <button className="text-lg font-medium border border-gray-900 px-4 py-3 rounded-full  hover:bg-gray-800 hover:text-[#FFCD70]">
        View Course
      </button>
    </div>
  );
};

export default Course1;
