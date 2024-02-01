import React from "react";
import { IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
