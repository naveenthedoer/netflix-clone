import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-20 pt-48 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black py-4 px-12 text-lg rounded-md hover:bg-opacity-40">
          ► Play
        </button>
        <button className="bg-gray-500 mx-2 text-white py-4 px-12 text-lg bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
