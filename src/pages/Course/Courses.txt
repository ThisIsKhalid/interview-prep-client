import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
      <section className="py-40">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl text-gray-900 font-medium">
            Choose Your Topic:{" "}
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-6">
            <Link to='/course/ReactJS'>
              <div className="border-2 border-r-8 border-b-8 border-gray-800 shadow-lg h-20">
                <h3 className="text-2xl mx-5 my-5">React JS</h3>
              </div>
            </Link>
            <Link to='/course/NodeJS'>
              <div className="border-2 border-r-8 border-b-8 border-gray-800 shadow-lg h-20">
                <h3 className="text-2xl mx-5 my-5">Node JS</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default Courses;