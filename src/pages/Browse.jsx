import Header from "../components/Header"
import PrimaryContainer from "../components/PrimaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import SecondaryContainer from "../components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse