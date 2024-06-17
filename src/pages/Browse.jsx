import PrimaryContainer from "../components/PrimaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse