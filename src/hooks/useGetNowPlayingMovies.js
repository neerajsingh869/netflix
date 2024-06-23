import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addNowPlayingMovies } from "../redux/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// responsible for fetching nowPlayingMovies from TMDB and
// dispatch an action to update state to store those movies
const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addNowPlayingMovies(response.results));
        })
        .catch((err) => console.error(err));
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useGetNowPlayingMovies;
