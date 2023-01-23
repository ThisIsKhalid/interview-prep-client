import React from 'react';

const StatData = () => {
    return (
      <section className="container mx-auto py-20">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="text-center">
            <h1 className="text-5xl text-gray-800 font-medium">4.5</h1>
            <p className="text-xl text-gray-700 font-medium">80k Reviews</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">30M</h1>
            <p className="text-xl text-gray-700 font-medium">Enrollments</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">2M+</h1>
            <p className="text-xl text-gray-700 font-medium">Learners</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">1K+</h1>
            <p className="text-xl text-gray-700 font-medium">Popular Courses</p>
          </div>
        </div>
      </section>
    );
};

export default StatData;