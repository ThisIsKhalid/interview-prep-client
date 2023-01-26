import React from "react";
import Course from "../../components/Course";

const Courses = () => {
  return (
    <section className="bg-slate-100 py-20 px-5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-10">
          <Course />
          <Course />
          <Course />

        </div>
      </div>
    </section>
  );
};

export default Courses;
