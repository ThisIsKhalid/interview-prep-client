import React from 'react';

const Video = ({video,title}) => {
    return (
      <div className="">
        <iframe
          src={`https://www.youtube.com/embed/${video}?start=19`}
          title="YouTube video player"
          className="w-full aspect-video border-2 border-gray-800 rounded-lg"
        ></iframe>
        <h3 className="lg:text-4xl text-2xl font-medium mt-5">{title}</h3>
      </div>
    );
};

export default Video;