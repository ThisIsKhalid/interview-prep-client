import React from "react";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const Course = ({course}) => {
  const {id,title} = course;
  return (
    <div className="h-full p-5 bg-gray-800 shadow-lg rounded-lg">
      <div className="mb-6">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=740&t=st=1674493087~exp=1674493687~hmac=0f2f0a980bb5295bb002f9bd9d3505ba294624f186693ae88ccfb5ccd81c8f56"
          alt=""
        />
      </div>
      <div className="mb-2 flex justify-between items-center text-white">
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FFCD70]" />
          <p className="">4.9</p>
          <p className="text-gray-400">(430 reviews)</p>
        </div>
        <div className="flex items-center gap-1">
          <FiClock />
          <p>02.33.35</p>
        </div>
      </div>
      <h3 className="text-2xl font-medium mb-6 text-white">{title}</h3>
      <Link to={`/course/${id}`}>
        <button className="text-lg font-medium px-4 py-3 rounded-full hover:bg-[#FFCD70] text-[#FFCD70] hover:text-gray-900 border border-[#FFCD70] transition-colors delay-75 duration-300">
          View Course
        </button>
      </Link>
    </div>
  );
};

export default Course;
