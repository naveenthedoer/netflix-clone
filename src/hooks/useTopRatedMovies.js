import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopularMovies,
  addTopRatedMovies,
} from "../utils/store/moviesSlice";
import {
  API_OPTIONS,
  TMDB_BASE_API_PATH,
} from "../utils/constants/tmbdConstants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const options = API_OPTIONS;
    const data = await fetch(TMDB_BASE_API_PATH + "/top_rated?page=1", options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
