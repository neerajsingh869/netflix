import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTrailer } from "../redux/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetEntryPageTrailer = (nowPlayingMovies) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      const fetchMoviePickedTrailer = async () => {
        const moviePicked = nowPlayingMovies[0];
        const movieId = moviePicked.id;

        try {
          let response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );

          response = await response.json();

          const filteredTrailers = response.results.filter(
            (video) => video.type === "Trailer"
          );

          let mainTrailer;
          if (filteredTrailers && filteredTrailers.length > 0) {
            mainTrailer = filteredTrailers.filter(
              (trailer) => trailer.name === "Official Trailer"
            )[0];
          } else {
            mainTrailer = filteredTrailers[0];
          }

          dispatch(addTrailer(mainTrailer));
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchMoviePickedTrailer();
    }
  }, [nowPlayingMovies, dispatch]);
};

export default useGetEntryPageTrailer;
