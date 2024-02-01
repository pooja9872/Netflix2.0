import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-r  from-black text-white font-extrabold">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className=" py-6 text-lg w-1/3">{overview}</p>
      <div className="flex mt-4">
        <button
          type="button"
          className=" bg-white text-black rounded-lg p-4 px-10 text-xl hover:bg-opacity-80"
        >
          ▶️ Play
        </button>
        <button
          type="button"
          className="mx-2 bg-white text-black rounded-lg p-4 px-8 text-xl bg-opacity-50"
        >
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
