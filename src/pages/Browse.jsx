import PrimaryContainer from "../components/PrimaryContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";

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
  )
}

export default Browse