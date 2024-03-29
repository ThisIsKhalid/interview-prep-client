import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title } = course;
  return (
    <div className="lg:h-[485px] md:h-[450px] h-[420px] p-5 bg-white shadow-lg rounded-lg relative">
      <div className="mb-6 rounded-lg overflow-hidden">
        <img
          className="w-full rounded-lg hover:scale-110 transition delay-75 ease-in-out duration-300"
          src="https://img.freepik.com/free-photo/online-web-design_53876-95309.jpg?w=740&t=st=1679673236~exp=1679673836~hmac=81540700e69c55112d0a0bbf024d5c56182a9511a161d80167ae2c959a1e3824"
          alt=""
        />
      </div>
      <div className="mb-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://img.freepik.com/free-photo/cartoon-character-with-fashion-bag_71767-98.jpg?size=338&ext=jpg"
            alt=""
          />
          <h3 className="text-base font-medium text-gray-500">Kevin Perry</h3>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FFCD70]" />
          <FaStar className="text-[#FFCD70]" />
          <FaStar className="text-[#FFCD70]" />
          <FaStar className="text-[#FFCD70]" />
          <FaStarHalf className="text-[#FFCD70]" />
          <p className="text-gray-900">4.9</p>
        </div>
      </div>
      {/* <Link to={`/course/${id}`}>
        <h3 className="text-2xl font-medium hover:text-blue-500 transition-colors ease-in-out duration-300">
          {title}
        </h3>
      </Link> */}
      <Link to="/coursedetails">
        <h3 className="text-2xl font-medium hover:text-blue-500 transition-colors ease-in-out duration-300">
          {title}
        </h3>
      </Link>
      <div className="absolute bottom-0 left-0 w-full p-5">
        <div className="border-t border-dashed border-gray-400 pt-5 flex items-center justify-between text-sm text-gray-500 mt-10">
          <div className="flex items-center gap-1">
            <HiOutlineDocumentText />
            <p>Lesson 8</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser />
            <p>Students 55</p>
          </div>
          <div className="flex items-center gap-1">
            <FiClock />
            <p>2h 15m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
