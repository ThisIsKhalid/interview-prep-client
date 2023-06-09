import React, { useEffect, useState } from "react";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="bg-slate-50 pb-20 ">
      <div className="bg-courses h-72 flex items-center justify-center mb-16">
        <div className="">
          <h1 className="text-4xl font-semibold text-gray-50 ">OUR COURSES</h1>
          <Breadcrumbs lastCrumb='Courses'/>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between pb-5 border-b border-gray-300 mb-5">
          <p className="text-lg text-gray-600">
            We found{" "}
            <span className="text-blue-500 font-semibold">
              {courses.length} courses
            </span>{" "}
            available for you.
          </p>
          <div className="flex items-center gap-3 text-base font-medium">
            <div className="flex items-center gap-1 cursor-pointer">
              <BsFillGrid3X3GapFill />
              <p>Grid</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaListUl />
              <p>List</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
