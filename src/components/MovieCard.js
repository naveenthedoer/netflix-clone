import React from "react";
import { TMDB_IMG_CDN_BASE_PATH } from "../utils/constants/tmbdConstants";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0 px-2  max-sm:w36 w-36 md:w-48 cursor-pointer">
      {movie.poster_path ? (
        <img
          alt={movie.original_title}
          src={TMDB_IMG_CDN_BASE_PATH + movie.poster_path}
        />
      ) : (
        <div className="w-full max-sm:h-[192px] sm:h-[192px] md:h-[264px] flex items-center justify-center bg-gray-500">
          <div className="px-2">{movie.original_title}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
