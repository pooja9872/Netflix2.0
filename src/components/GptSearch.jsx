import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed h-lvh -z-10">
        <img className="bg-gradient-to-t" src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
