import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="h-screen overflow-y-hidden bg-black bg-opacity-90">
      <div className="absolute -z-10">
        <img src={BG_IMAGE_URL} alt="logo" className="object-cover h-screen" />
      </div>
      <div className="md:pt-32 pt-24">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
