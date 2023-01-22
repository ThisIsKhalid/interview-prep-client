import React from 'react';
import weProvideImg from '../../assets/images/weProvide.png'

const WhatWeProvide = () => {
    return (
      <section className=" we-provide">
        <div className="container mx-auto ">
          <div className='grid grid-cols-2 items-center'>
            <div>
              <img src={weProvideImg} alt="" />
            </div>
            <div className='ml-[15%]'>
              <h1 className="text-6xl text-gray-900 leading-tight font-medium">
                We Provide <br />{" "}
                <span className=" bg-[#FFCD70] px-5 py-1 rounded-full italic font-normal border border-gray-900">
                  Smart
                </span>{" "}
                Online <br /> Education
              </h1>
              <p className='text-xl text-gray-700 '>
                Our Courses come with Assigned Projects, Direct Interactions with Mentors, Relevent Resources, and Tools that help you dive into In-Depth learning from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhatWeProvide;