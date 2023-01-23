import React from 'react';
import weProvideImg from '../../assets/images/weProvide.png'

const WhatWeProvide = () => {
    return (
      <section className=" we-provide">
        <div className="container mx-auto py-10 lg:py-0">
          <div className='grid lg:grid-cols-2 items-center px-5 lg:px-0'>
            <div>
              <img src={weProvideImg} alt="" />
            </div>
            <div className='lg:ml-[15%]'>
              <h1 className="lg:text-6xl text-4xl text-gray-900 leading-tight font-medium">
                We Provide <br />{" "}
                <span className=" bg-[#FFCD70] px-5 py-1 rounded-full italic font-normal border border-gray-900">
                  Smart
                </span>{" "}
                Online <br /> Education
              </h1>
              <p className='lg:text-xl text-base text-gray-700 '>
                Our Courses come with Assigned Projects, Direct Interactions with Mentors, Relevent Resources, and Tools that help you dive into In-Depth learning from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhatWeProvide;