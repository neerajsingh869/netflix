import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../redux/slices/movieSlice";

const EntryPageTrailer = () => {
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

  if (nowPlayingMovies.length === 0) return null;

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <iframe className="w-screen absolute -top-24" style={{height: "calc(100vh + 200px)"}} src={`https://www.youtube.com/embed/${trailer.key}?rel=0&controls=0&autoplay=1&mute=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default EntryPageTrailer