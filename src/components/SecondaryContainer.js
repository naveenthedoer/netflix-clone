import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className=" bg-black">
      {/* 
    - Movie List - Popular
    - Movie List - Now Playing
    - Movie list - Trending
    - Movie list - Horror
   */}
      <div className="relative px-2 md:pl-12 z-20 mt-0 md:-mt-52">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
