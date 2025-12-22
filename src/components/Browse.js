import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* 
        Manin container
          -Video Container
            - video
            - video titl
          - Secondary Conatainer
            - Movies List *n
              - Cards *n
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
