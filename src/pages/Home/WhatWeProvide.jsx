import React from 'react';
import weProvideImg from '../../assets/images/weProvide.png'

const WhatWeProvide = () => {
    return (
      <section className=" we-provide">
        <div className="container mx-auto pb-10 lg:pb-0">
          <div className="grid lg:grid-cols-2 items-center px-5 lg:px-0">
            <div>
              <img src={weProvideImg} alt="" />
            </div>
            <div className="lg:ml-[15%] lg:text-5xl text-4xl text-gray-900 font-light text-center lg:text-left">
              <h2>Crack Your</h2>
              <h1 className='font-bold'>Front-End Interview</h1>
              <h2>Faster</h2>
              <p className="lg:text-xl text-base text-gray-700 ">
                Our Courses come with Assigned Projects, Direct Interactions
                with Mentors, Relevent Resources, and Tools that help you dive
                into In-Depth learning from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhatWeProvide;