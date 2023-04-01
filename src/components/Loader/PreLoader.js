import React from 'react';
import { Watch } from 'react-loader-spinner'
import './PreLoader.css'

const PreLoader = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen text-gray-800 text-2xl relative">
          <div class="pencil">
            <div class="pencil__ball-point"></div>
            <div class="pencil__cap"></div>
            <div class="pencil__cap-base"></div>
            <div class="pencil__middle"></div>
            <div class="pencil__eraser"></div>
          </div>
          <div class="line"></div>
          <h2 className="text-4xl text-gray-800 font-semibold absolute bottom-[20%] left-[50%] translate-x-[-50%]">
            Page Loading...
          </h2>
        </div>
      </>
    );
};

export default PreLoader;