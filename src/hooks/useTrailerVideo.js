import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoTrailer();
  }, []);

  const getVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const videos = json.results;
    const trailer =
      videos.find((video) => video.type === "Trailer") || videos[0];

    dispatch(addTrailer(trailer));
  };
};

export default useTrailerVideo;
