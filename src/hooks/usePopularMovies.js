import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/store/moviesSlice";
import { TMDB_BASE_API_PATH } from "../utils/constants/tmbdConstants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const options = API_OPTIONS;
    const data = await fetch(TMDB_BASE_API_PATH + "popular?page=1", options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
