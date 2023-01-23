import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import certificate from '../../assets/icons/certification.png'
import instructor from '../../assets/icons/instructor.png'
import support from '../../assets/icons/24-hours.png'
import videoLesson from '../../assets/icons/lesson.png'

const OurFeature = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 bg-[#ffefe7db] px-10 py-10 rounded-lg">
            <div className="lg:col-span-2 flex items-center bg-gray-900 rounded-lg shadow-xl lg:h-64 py-5 lg:py-0">
              <div className="px-10">
                <h1 className="lg:text-5xl text-4xl text-white font-medium leading-tight mb-6">
                  Our Special
                  <br />
                  <span className="text-[#FFCD70]">Features</span> For You
                </h1>
                <button className="flex items-center gap-2 text-lg font-medium px-4 py-3 rounded-full hover:bg-[#FFCD70] text-[#FFCD70] hover:text-gray-900 border border-[#FFCD70]">
                  See All Features <FiArrowUpRight className="text-xl" />
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-3 justify-center px-10 shadow-xl h-64">
              <img className="h-20 w-20" src={certificate} alt="" />
              <h3 className="text-2xl font-medium">Get Certificate</h3>
              <p className="text-gray-700">
                Add value to your Certificate and Increase your chances of
                getting hired in your Dream Job
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-3 justify-center px-10 shadow-xl h-64">
              <img className="h-20 w-20" src={instructor} alt="" />
              <h3 className="text-2xl font-medium">Amazing Instructor</h3>
              <p className="text-gray-700">
                Our Amazing Instructor bring Experience, Knowledge, and Fun on
                the table.
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-3 justify-center px-10 shadow-xl h-64">
              <img className="h-20 w-20" src={support} alt="" />
              <h3 className="text-2xl font-medium">Life Time Support</h3>
              <p className="text-gray-700">
                You will have Life Time Access of the Courses & Resources. Also
                contacting instructors any time.
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-3 justify-center px-10 shadow-xl h-64">
              <img className="h-20 w-20" src={videoLesson} alt="" />
              <h3 className="text-2xl font-medium">Video Lesson</h3>
              <p className="text-gray-700">
                Recorded version of lectures from Professional Instructions to
                boost your growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurFeature;