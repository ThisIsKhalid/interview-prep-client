import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { name } = useParams();
  //   console.log(name);

  const courses = {
    ReactJS: [
      { title: "ReactJS 1", vidId: "QFaFIcGhPoM" },
      { title: "ReactJS 2", vidId: "9hb_0TZ_MVI" },
      { title: "ReactJS 3", vidId: "9VIiLJL0H4Y" },
    ],
    NodeJS: [
      { title: "NodeJS 1", vidId: "LAUi8pPlcUM" },
      { title: "NodeJS 2", vidId: "HXpPKhWOkAs" },
      { title: "NodeJS 3", vidId: "2mWb7j1A3c8" },
    ],
  };

  const [video, setVideo] = useState(courses[name][0].vidId);
  const [title, setTitle] = useState(courses[name][0].title);

  const changeVideo = (id, title) => {
    // console.log('click', id, title);
    setVideo(id);
    setTitle(title);
  };

  const renderVideos = () => {
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

  return (
    <section className="py-40">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl text-gray-800 mb-6">
          Welcome to <span className="font-medium">{name}</span>
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 px-5">
          <div className="lg:col-span-2 col-span-1">{renderVideos()}</div>
          <div>
            {courses[name].map((item) => (
              <div
                key={item.vidId}
                className="border-2 border-r-4 border-b-4 border-gray-800 shadow-lg mb-5"
                onClick={() => changeVideo(item.vidId, item.title)}
              >
                <p className="lg:text-2xl text-lg p-3 cursor-pointer">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayVideo;
