import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
