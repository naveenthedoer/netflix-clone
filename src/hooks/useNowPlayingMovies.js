import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import {
  API_OPTIONS,
  TMDB_BASE_API_PATH,
} from "../utils/constants/tmbdConstants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies);

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, []);

  const getNowPlayingMovies = async () => {
    const options = API_OPTIONS;
    const data = await fetch(
      TMDB_BASE_API_PATH + "now_playing?page=1",
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
