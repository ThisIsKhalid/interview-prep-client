import React, { useEffect, useState } from "react";
import Course from "../../components/Course";

const Courses = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('allCourses.json')
    .then(res=> res.json())
    .then(data => setCourses(data))
  }, []);
  // console.log(courses);

  // const courses = [
  //   {
  //     id: "PLNMnAEqLBwmo2aAHG1hT41QCgYV3366gp",
  //     title: "Top HTML Interview Question",
  //   },
  //   {
  //     id: "PLNMnAEqLBwmq4cvfIMWE9ZiAmndL5VOIM",
  //     title: "Top CSS Interview Question",
  //   },
  //   {
  //     id: "PLNMnAEqLBwmodUM0HlExxtYERNS2YARhW",
  //     title: "Top JavaScript Interview Question",
  //   },
  // ];

  return (
    <section className="bg-slate-50 py-20 px-5">
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
