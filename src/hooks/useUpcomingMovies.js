import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/store/moviesSlice";
import {
  TMDB_BASE_API_PATH,
  API_OPTIONS,
} from "../utils/constants/tmbdConstants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.topRatedMovies);

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const options = API_OPTIONS;
    const data = await fetch(TMDB_BASE_API_PATH + "upcoming?page=1", options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
