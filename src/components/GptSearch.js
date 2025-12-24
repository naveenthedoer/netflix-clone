import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BG_IMAGE_URL} className="object-cover" alt="logo" />
      </div>
      <div className="pt-32">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
