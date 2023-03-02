import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
    const { title, body, author, imgUrl } = blog;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-[#ffd5c1] rounded-lg shadow-lg">
      <div className="">
        <img
          className="object-cover object-center w-full md:rounded-l-lg lg:h-72"
          src={imgUrl}
          alt=""
        />
      </div>

      <div className="p-2 pl-3 flex flex-col justify-between">
        <div className="pt-2">
          <h1 class="text-xl font-semibold text-gray-800">{title}</h1>

          <p class="mt-2 text-gray-600">{body.slice(0, 250)}</p>
          <Link
            to=""
            class="inline-block text-blue-500 underline hover:text-blue-400"
          >
            read more...
          </Link>
        </div>

        <div className="py-1">
          <Link
            to=""
            class="text-base font-medium text-gray-500 hover:underline hover:text-gray-800"
          >
            John snow
          </Link>

          <p class="text-sm text-gray-500">February 1, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
