import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const StatData = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="container mx-auto py-20">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
          <div className="text-center">
            <h1 className="text-5xl text-gray-800 font-medium">
              {counterOn && (
                <CountUp end={4.5} duration={7} delay={0} decimals={1} />
              )}
            </h1>
            <p className="text-xl text-gray-700 font-medium">80k Reviews</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">
              {counterOn && <CountUp end={2500} duration={7} delay={0} />}+
            </h1>
            <p className="text-xl text-gray-700 font-medium">Enrollments</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">
              {counterOn && <CountUp end={5000} duration={7} delay={0} />}+
            </h1>
            <p className="text-xl text-gray-700 font-medium">Learners</p>
          </div>
          <div className="lg:border-l-2 border-gray-700 text-center">
            <h1 className="text-5xl text-gray-800 font-medium">
              {counterOn && <CountUp end={10} duration={7} delay={0} />}+
            </h1>
            <p className="text-xl text-gray-700 font-medium">Popular Courses</p>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default StatData;
