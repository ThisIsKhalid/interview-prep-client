import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../../components/Course";

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
    </section>
  );
};

export default PopulerCourses;
