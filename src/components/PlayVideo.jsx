import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromApi";
import Video from "./Video";

const PlayVideo = () => {
  const { id } = useParams();
  // console.log(id);

  const [items, setItems] = useState([]);
  const [course, setCourse] = useState({});
  const { title, description } = course;

  const [video, setVideo] = useState(items[0]?.snippet.resourceId.videoId);
  const [vidTitle, setVidTitle] = useState(items[0]?.snippet.title);

  useEffect(() => {
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`).then((data) =>
      setItems(data.items)
    );

    fetchFromAPI(`playlists?part=snippet&id=${id}`).then((data) =>
      setCourse(data.items[0].snippet)
    );
  }, [id]);

  const changeVideo = (newVideo, newTitle) => {
    // console.log("click", videoId, title);
    setVideo(newVideo);
    setVidTitle(newTitle);
  };
  // console.log(items[0]?.snippet?.title);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-medium text-gray-900 mb-3">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 px-5">
          <div className="lg:col-span-3 col-span-1">
            <Video video={video} title={vidTitle} />
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
                  <p className=" p-3 cursor-pointer">{title}</p>
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
