import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTopRatedMovies } from "../redux/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// responsible for fetching nowPlayingMovies from TMDB and
// dispatch an action to update state to store those movies
const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const {topRatedMovies} = useSelector(state => state.movies);

  useEffect(() => {
    const getNowPlayingMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addTopRatedMovies(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!topRatedMovies || topRatedMovies.length === 0) && getNowPlayingMovies();
  }, [topRatedMovies, dispatch]);
};

export default useGetTopRatedMovies;
