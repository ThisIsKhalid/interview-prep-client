import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button2 = ({ text, className = "" }) => {
  return (
    <button
      className={`my-5 relative inline-flex items-center px-12 py-3 overflow-hidden text-xl font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:text-white group hover:bg-gray-50 w-[85%] ${className}`}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-gray-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <BsArrowRight className="text-2xl" />
      </span>
      <span className="relative mx-auto">{text}</span>
    </button>
  );
};

export default Button2;
