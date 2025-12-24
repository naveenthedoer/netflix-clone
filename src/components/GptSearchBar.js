import React from "react";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center">
      <form className="py-4 w-1/2 flex items-center justify-center bg-black">
        <input
          className="p-4 mr-4 w-2/3 rounded-md"
          type="text"
          name="search"
          placeholder={languageConstants[language].searchPlaceholder}
        />
        <button className="py-4 px-4 w-1/4 bg-red-700 text-white rounded-md font-bold text-xl">
          {languageConstants[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
