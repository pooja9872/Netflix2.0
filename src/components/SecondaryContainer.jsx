import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    nowPlayingMovies &&
    popularMovies &&
    trendingMovies &&
    upcomingMovies && (
      <div className="bg-black">
        <div className=" -mt-52 relative pl-12 z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Trending"} movies={trendingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
