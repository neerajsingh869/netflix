import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUpcomingMovies } from "../../redux/slices/movieSlice";
import { API_OPTIONS } from "../../utils/constants";

// responsible for fetching upcomingMovies from TMDB and
// dispatch an action to update state to store those movies
const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    const getUpcomingMovies = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addUpcomingMovies(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!upcomingMovies || upcomingMovies.length === 0) && getUpcomingMovies();
  }, [upcomingMovies, dispatch]);
};

export default useGetUpcomingMovies;
