import PrimaryContainer from "../components/PrimaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import SecondaryContainer from "../components/SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse