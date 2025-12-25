import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <div className="absolute bottom-8 md:bottom-52">
        <h1 className="text-2xl lg:text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg md:w-1/2 xl:w-1/3 md:max-h-20 lg:max-h-40 md:overflow-hidden">
          {overview}
        </p>
        <div className="my-4">
          <button className="bg-white text-black py-2 md:py-4 px-4 md:px-12 md:text-lg rounded-md hover:bg-opacity-40">
            ► Play
          </button>
          <button className="bg-gray-500 mx-2 text-white py-2 md:py-4 px-4 md:px-12 md:text-lg bg-opacity-50 rounded-md">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
