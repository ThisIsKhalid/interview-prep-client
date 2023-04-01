import React from "react";
import {FiSearch} from 'react-icons/fi'
import Breadcrumbs from "../../components/Breadcrumbs";
import BlogCard from "./BlogCard";

const Blogs = () => {

  const blogPosts = [
    {
      id: 1,
      title: "JAVASCRIPT",
      body: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      id: 2,
      title: "Data Structure ",
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      id: 3,
      title: "Algorithm",
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      id: 4,
      title: "Computer Network",
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `,
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
  ];



  return (
    <>
      {/* breadcrumb and banner */}
      <div className="bg-blogs h-72 flex items-center justify-center relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
        <div className="z-50">
          <h1 className="text-4xl font-semibold text-gray-50">OUR BLOGS</h1>
          <Breadcrumbs />
        </div>
        {/* create blog */}
        <div className=" flex justify-end px-5 absolute bottom-0 left-0 w-full ">
          <label
            htmlFor="my-modal-5"
            className="btn bg-[#FFCD70] hover:bg-[#FFCD70] md:py-2 px-5 md:text-base text-sm rounded-lg font-medium text-gray-900"
          >
            Create Blog
          </label>
        </div>
      </div>

      <div className="py-10 px-5 bg-gray-50">
        {/* -------------text editor---------------- */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Congratulations</h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>

        {/* --------------blogs---------------- */}
        <div className="border-b border-gray-400 mb-5 pb-5 flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-800 ">Latest Blogs</h2>

          {/* search bar */}
          <div className="lg:w-1/2 w-full relative flex justify-end ">
            <input
              type="text"
              className="w-4/5 py-2 rounded-lg px-7 focus:outline-[#FFCD70] focus:outline-double focus:outline-2 bg-gray-200 text-gray-900 font-medium"
              placeholder="search title"
            />
            <div className="w-14 bg-[#FFCD70] h-10 absolute top-0 right-0 rounded-r-lg"></div>
            <button>
              <FiSearch className="absolute top-3 right-4 text-gray-900 text-lg" />
            </button>
          </div>
        </div>

        {/* --------------posts---------------- */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {blogPosts?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
