import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieReccomendationsDetails, gptSearchRecommendedResults } =
    useSelector((store) => store.gpt);

  if (!movieReccomendationsDetails) return null;

  return (
    <div className="py-4 px-4 my-2 h-[calc(100vh-228px)] overflow-y-auto text-white">
      {gptSearchRecommendedResults.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieReccomendationsDetails[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
