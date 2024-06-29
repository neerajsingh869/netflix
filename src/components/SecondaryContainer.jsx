import { useSelector } from "react-redux";
import CardList from "./CardList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-neutral-900 sm:-top-12 sm:-mb-12 lg:-top-28 lg:-mb-28 xl:-top-40 xl:-mb-40 z-0 sm:z-10 relative pb-16">
      <div className="relative bg-transparent -top-0 -mb-0 2xl:-top-44 2xl:-mb-44">
        <div className="">
          <CardList
            title={"Now Playing Movies"}
            data={movies?.nowPlayingMovies}
          />
          <CardList title={"Popular Movies"} data={movies?.popularMovies} />
          <CardList title={"Top Rated Movies"} data={movies?.topRatedMovies} />
          <CardList title={"Upcoming Movies"} data={movies?.upcomingMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
