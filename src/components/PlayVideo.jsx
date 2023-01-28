import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromApi";
import Video from "./Video";

const PlayVideo = () => {
  const { name } = useParams();
  // console.log(name);
  
  const [items, setItems] = useState([]);
  const [video, setVideo] = useState(items[0]?.snippet.resourceId.videoId);
  const [title, setTitle] = useState(items[0]?.snippet.title);

  useEffect(() => {
    fetchFromAPI(
      `playlistItems?part=snippet&playlistId=PLNMnAEqLBwmo2aAHG1hT41QCgYV3366gp`
    ).then((data) => setItems(data.items));
  }, []);


  const changeVideo = (newVideo, newTitle) => {
    // console.log("click", videoId, title);
    setVideo(newVideo);
    setTitle(newTitle);
  };
  console.log(items[0]?.snippet?.title);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl text-gray-800 mb-6">
          Welcome to <span className="font-medium">{name}</span>
        </h1>
        <div className="grid grid-cols-4 gap-10 px-5">
          <div className="col-span-3">
            <Video video={video} title={title} />
          </div>
          <div>
            {items.map((item) => {
              // console.log(item.id);
              const videoId = item.snippet.resourceId.videoId;
              const title = item.snippet.title;

              return (
                <div
                  key={item.id}
                  className="border border-r-4 border-b-4 border-gray-800 shadow-lg mb-5 rounded-lg"
                  onClick={() => changeVideo(videoId, title)}
                >
                  <p className=" p-3 cursor-pointer">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayVideo;
