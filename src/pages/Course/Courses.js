import React from "react";
import Course from "../../components/Course";

const Courses = () => {
  const courses = [
    { id: 1, title: "Top HTML Interview Question" },
    { id: 2, title: "Top CSS Interview Question" },
    { id: 3, title: "Top JavaScript Interview Question" },
  ];

  return (
    <section className="bg-slate-100 py-20 px-5">
      <div className="container mx-auto">
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
