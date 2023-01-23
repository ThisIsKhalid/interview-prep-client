import React from 'react';
import openingImg from "../../assets/images/openingAccount.png";
import { FiCheck } from "react-icons/fi";

const StartingProcess = () => {
    return (
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center px-5">
            <div className='order-last md:order-none text-center md:text-left'>
              <div className="lg:text-5xl text-4xl font-medium text-gray-900 mb-6">
                <h1 className="mb-5">It's easy to start</h1>
                <h1 className="border border-gray-900 px-3 py-2 font-bold bg-[#FFCD70] rounded-full inline">
                  Learning
                </h1>
              </div>
              <div className='text-lg text-gray-900'>
                <p className='w-full lg:w-4/5 mb-5'>Our sign in process lets you start your learning journey without much hassle. Our aim is to create a great learning experience for you.</p>
                <ul>
                    <li className='flex items-center gap-3 font-medium'><FiCheck className='bg-[#FFCD70] rounded-full text-2xl p-1' /> Create Account</li>
                    <li className='flex items-center gap-3 font-medium'><FiCheck className='bg-[#FFCD70] rounded-full text-2xl p-1' /> Purcess Lessons</li>
                    <li className='flex items-center gap-3 font-medium'><FiCheck className='bg-[#FFCD70] rounded-full text-2xl p-1' /> Start Learning</li>
                </ul>
              </div>
            </div>
            <div className=''>
              <img className='w-full' src={openingImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default StartingProcess;