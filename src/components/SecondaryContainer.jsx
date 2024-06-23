import { useSelector } from "react-redux";
import CardList from "./CardList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-neutral-900 pb-16">
      <div className="-mt-40 z-30 relative">
        <CardList
          title={"Now Playing Movies"}
          data={movies?.nowPlayingMovies}
        />
        <CardList title={"Popular Movies"} data={movies?.popularMovies} />
        <CardList title={"Top Rated Movies"} data={movies?.topRatedMovies} />
        <CardList title={"Upcoming Movies"} data={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
