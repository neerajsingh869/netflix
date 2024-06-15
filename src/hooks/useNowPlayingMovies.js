import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";
import { options } from "../utils/constants";

// responsible for fetching nowPlayingMovies from TMDB and 
// dispatch an action to update state to store those movies
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = () => {
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        dispatch(addNowPlayingMovies(response.results));
      })
      .catch(err => console.error(err));
    }

    getNowPlayingMovies();
  }, [dispatch]);
}

export default useNowPlayingMovies;