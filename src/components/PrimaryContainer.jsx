import { useSelector } from "react-redux";

import EntryPageTrailer from "./EntryPageTrailer";
import EntryPageTrailerDescription from "./EntryPageTrailerDescription";
import useGetEntryPageTrailer from "../hooks/useGetEntryPageTrailer";

const PrimaryContainer = () => {
  const { nowPlayingMovies, trailer } = useSelector((store) => store.movies);

  // custom hook to dispatch action to add trailer in movies store
  useGetEntryPageTrailer(nowPlayingMovies);

  if (nowPlayingMovies.length === 0 || !trailer) return null;

  return (
    <div className="bg-neutral-900 relative z-10 sm:z-0">
      <EntryPageTrailer trailer={trailer} />
      <EntryPageTrailerDescription trailerMovie={nowPlayingMovies[0]} />
    </div>
  );
};

export default PrimaryContainer;
