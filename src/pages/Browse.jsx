import PrimaryContainer from "../components/PrimaryContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useGetNowPlayingMovies from "../hooks/movies/useGetNowPlayingMovies";
import useGetTopRatedMovies from "../hooks/movies/useGetTopRatedMovies";
import useGetPopularMovies from "../hooks/movies/useGetPopularMovies";
import useGetUpcomingMovies from "../hooks/movies/useGetUpcomingMovies";

const Browse = () => {
  useGetNowPlayingMovies();
  useGetTopRatedMovies();
  useGetPopularMovies();
  useGetUpcomingMovies();

  return (
    <div className="overflow-hidden">
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
