import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromApi";
import Video from "./Video";
import { FiSearch } from "react-icons/fi";

const PlayVideo = () => {
  const { id } = useParams();
  // console.log(id);

  const [items, setItems] = useState([]);
  const [course, setCourse] = useState({});
  const { title, description, thumbnails } = course;
  // console.log(course?.thumbnails?.standard.url);

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
            {video ? (
              <Video video={video} title={vidTitle} />
            ) : (
              <>
                <img className="w-full" src={thumbnails?.standard.url} alt="" />
              </>
            )}
          </div>

          {/* class list */}
          <div className="h-[700px] py-4 shadow-lg bg-slate-100 rounded-lg">
            <form className="px-2 relative mb-5">
              <input
                type="text"
                placeholder="Search Lesson"
                className="input w-full pl-10 bg-gray-700 text-white focus:outline-none"
              />
              <FiSearch className="absolute top-4 left-6 text-white" />
            </form>
            <ul className="h-[600px] overflow-auto px-2">
              {items.map((item) => {
                // console.log(item.id);
                const videoId = item.snippet.resourceId.videoId;
                const title = item.snippet.title;

                return (
                  <li
                    key={item.id}
                    className="border border-r-4 border-b-4 border-gray-800 shadow-lg mb-5 rounded-lg cursor-pointer bg-white/90"
                    onClick={() => changeVideo(videoId, title)}
                  >
                    <p className="p-3 text-sm">{title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayVideo;
