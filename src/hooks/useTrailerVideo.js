import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { TMDB_BASE_API_PATH } from "../utils/constants/tmbdConstants";

const useTrailerVideo = ({ id }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    !trailer && getVideoTrailer();
  }, []);

  const getVideoTrailer = async () => {
    const data = await fetch(
      `${TMDB_BASE_API_PATH}${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const videos = json.results;
    const trailer =
      videos.find((video) => video.type === "Trailer") || videos[0];

    dispatch(addTrailer(trailer));
  };

  return { trailer };
};

export default useTrailerVideo;
