import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [newModule, setNewModule] = useState(1);
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("allCourses.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, []);

  const courses = [
    {
      id: 1,
      module: 1,
      title: "ReactJS",
      videos: [
        { title: "ReactJS 1", vidId: "QFaFIcGhPoM" },
        { title: "ReactJS 2", vidId: "9hb_0TZ_MVI" },
        { title: "ReactJS 3", vidId: "9VIiLJL0H4Y" },
      ],
    },
    {
      id: 2,
      module: 2,
      title: "NodeJS",
      videos: [
        { title: "NodeJS 1", vidId: "LAUi8pPlcUM" },
        { title: "NodeJS 2", vidId: "HXpPKhWOkAs" },
        { title: "NodeJS 3", vidId: "2mWb7j1A3c8" },
      ],
    },
    {
      id: 3,
      module: 3,
      title: "HTML",
      videos: [
        { title: "HTML 1", vidId: "LAUi8pPlcUM" },
        { title: "HTML 2", vidId: "HXpPKhWOkAs" },
        { title: "HTML 3", vidId: "2mWb7j1A3c8" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl text-gray-900 font-medium">
          Choose Your Topic:{" "}
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-6 px-10">
          {/* ------------module name------------- */}
          <div>
            {courses.map((course) => {
              return (
                <>
                  <div
                    key={course.id}
                    onClick={() => setNewModule(course.module)}
                    className="mb-10 cursor-pointer"
                  >
                    <p className="text-lg text-cyan-600">
                      Module {course.module}
                    </p>
                    <h3 className="text-2xl text-gray-800 font-medium">
                      {course.title}
                    </h3>
                  </div>
                </>
              );
            })}
          </div>

          {/* ------------video list under module---------- */}
          <div className="lg:col-span-2">
            {courses?.map((course) => {
              const { id, module, videos } = course;
              return (
                <>
                  <div key={id}>
                    {videos.map(
                      (vid) =>
                        module === newModule && (
                          <Link to={`/module/${vid.vidId}`}>
                            <div className="border border-gray-800 rounded-lg h-40 mb-10 flex items-center justify-center cursor-pointer">
                              <h3 className="text-3xl">{vid.title}</h3>
                            </div>
                          </Link>
                        )
                    )}
                  </div>
                </>
              );
            })}
          </div>

          {/* <Link to='/course/ReactJS'>
              <div className="border-2 border-r-8 border-b-8 border-gray-800 shadow-lg h-20">
                <h3 className="text-2xl mx-5 my-5">React JS</h3>
              </div>
            </Link> */}

          {/* <Link to='/course/NodeJS'>
              <div className="border-2 border-r-8 border-b-8 border-gray-800 shadow-lg h-20">
                <h3 className="text-2xl mx-5 my-5">Node JS</h3>
              </div>
            </Link> */}
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
