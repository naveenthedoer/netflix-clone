import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addRecommendedMovieResult } from "../utils/store/gptSlice";
import { languageConstants } from "../utils/constants/languageConstants";
import { API_OPTIONS } from "../utils/constants/tmbdConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef("");
  const dispatch = useDispatch();

  const searchMovieDetailsTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an api call to open ai and get movie results
    let movieRecommendations = [
      "Gadar",
      "Sholay",
      "Don",
      "Golmal",
      "Andaz Apna Apna",
    ];

    // const getQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query: " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated movies like the example result given ahead. Example result: Gadar2, Sholay, Don, Golmal, koi mil gya";

    // try {
    //   const completion = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: getQuery }],
    //   });

    //   if (completion.choices) {
    //     // TODO: Write error handling
    //     return;
    //   }

    //   movieRecommendations =
    //     completion.choices[0]?.message?.content?.split(",") ||
    //     movieRecommendations;
    // } catch (e) {
    //   console.error(e);
    // }

    const moviePromises = movieRecommendations.map((movie) =>
      searchMovieDetailsTMDB(movie)
    );

    const tmdbResults = await Promise.all(moviePromises);
    dispatch(
      addRecommendedMovieResult({
        movieReccomendationsDetails: tmdbResults,
        gptSearchRecommendedResults: movieRecommendations,
      })
    );
  };

  return (
    <div className="flex justify-center">
      <form
        className="py-4 w-1/2 flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 mr-4 w-2/3 rounded-md"
          type="text"
          name="search"
          placeholder={languageConstants[language].searchPlaceholder}
        />
        <button
          className="py-4 px-4 w-1/4 bg-red-700 text-white rounded-md font-bold text-xl"
          onClick={handleGptSearchClick}
        >
          {languageConstants[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
