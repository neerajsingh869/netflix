import { useDispatch, useSelector } from "react-redux";
import EntryPageTrailer from "./EntryPageTrailer"
import EntryPageTrailerDescription from "./EntryPageTrailerDescription"
import { useEffect } from "react";
import { addTrailer } from "../redux/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const PrimaryContainer = () => {
  const {nowPlayingMovies, trailer} = useSelector(store => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      const fetchMoviePickedTrailer = async () => {
        const moviePicked = nowPlayingMovies[0];
        const movieId = moviePicked.id;

        try {
          let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);

          response = await response.json();
          console.log(response.results);

          const filteredTrailers = response.results.filter(video => video.type === "Trailer");

          let mainTrailer;
          if (filteredTrailers && filteredTrailers.length > 0) {
            mainTrailer = filteredTrailers.filter(trailer => trailer.name === "Official Trailer")[0];
          } else {
            mainTrailer = filteredTrailers[0];
          }

          console.log(mainTrailer);
          dispatch(addTrailer(mainTrailer));

        } catch (error) {
          console.log(error.message);
        }
      }
  
      fetchMoviePickedTrailer();
    }
  }, [nowPlayingMovies, dispatch])

  if (nowPlayingMovies.length === 0 || !trailer) return null;

  return (
    <div>
      <EntryPageTrailer trailer={trailer} />
      <EntryPageTrailerDescription /> 
    </div>
  )
}

export default PrimaryContainer