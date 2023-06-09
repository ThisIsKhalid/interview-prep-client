import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Courses/Course";
import Button2 from "../../components/buttons/Button_2";
import { Link } from "react-router-dom";

const PopulerCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <section className="bg-gray-800 py-20 px-5">
      <div className="container mx-auto">
        <div className="font-medium text-center mb-20 lg:text-5xl text-4xl">
          <h1 className=" text-white ">Populer </h1>
          <h1 className="border border-[#FFCD70] text-[#FFCD70] rounded-full py-2 px-3 md:w-[25%] w-3/4 mx-auto mt-2">
            Courses
          </h1>
        </div>

        {/* courses */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-10">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Link>
          <button class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold text-lg transition-all bg-gray-100 rounded-lg hover:bg-white group">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#FFCD70] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-cyan-600 transition-colors duration-300 ease-in-out group-hover:text-gray-900">
              See More
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopulerCourses;
