import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openaiInstance from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptSearchMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const getLanguages = useSelector((store) => store.config.lang);

  // search movie in TMDB
  const searhMovieTMDB = async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleGptSearchClicked = async () => {
    // Make API call to Open AI gpt to get Movie result
    try {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openaiInstance.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovieList = gptResults.choices?.[0].message?.content.split(",");
      const promiseArray = gptMovieList.map((movie) => searhMovieTMDB(movie));
      const tmdbMoviesResults = await Promise.all(promiseArray);
      dispatch(
        addGptSearchMovies({
          movieNames: gptMovieList,
          movieResults: tmdbMoviesResults,
        })
      );
    } catch (error) {
      console.log(error["message"]);
    }
  };

  return (
    <div className="w-1/2 pt-[10%] m-auto">
      <form
        action=""
        className=" bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4 outline-none rounded-lg"
          placeholder={lang[getLanguages].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-4 px-2 my-4 me-4 bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClicked}
        >
          {lang[getLanguages].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
