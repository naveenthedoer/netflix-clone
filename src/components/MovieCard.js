import React from "react";
import { IMG_CDN_BASE_PATH } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0 px-2 w-48 cursor-pointer">
      <img
        alt={movie.original_title}
        src={IMG_CDN_BASE_PATH + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
