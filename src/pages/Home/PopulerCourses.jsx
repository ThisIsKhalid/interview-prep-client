import React from "react";
import Course from "../../components/Course1";

const PopulerCourses = () => {
  return (
    <section className="bg-gray-800 py-20 px-5">
      <div className="container mx-auto">
        <h1 className="lg:text-5xl text-4xl text-white font-medium text-center mb-20">
          Populer{" "}
          <span className="border border-[#FFCD70] text-[#FFCD70] rounded-full py-2 px-3">
            Courses
          </span>
        </h1>

        {/* courses */}
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10">
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </section>
  );
};

export default PopulerCourses;
