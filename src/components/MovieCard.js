import React from "react";
import { IMG_CDN_BASE_PATH } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0 px-2 w-48 cursor-pointer">
      {movie.poster_path ? (
        <img
          alt={movie.original_title}
          src={IMG_CDN_BASE_PATH + movie.poster_path}
        />
      ) : (
        <div className="w-full h-[264px] flex items-center justify-center bg-gray-500">
          <div className="px-2">{movie.original_title}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
