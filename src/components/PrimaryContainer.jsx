import { useSelector } from "react-redux";

import EntryPageTrailer from "./EntryPageTrailer";
import EntryPageTrailerDescription from "./EntryPageTrailerDescription";
import useGetEntryPageTrailer from "../hooks/movies/useGetEntryPageTrailer";

const PrimaryContainer = () => {
  const { trailer: trailerMovie } = useSelector((store) => store.movies);

  // custom hook to dispatch action to add trailer in movies store
  useGetEntryPageTrailer();

  if (!trailerMovie) return null;

  return (
    <div className="bg-neutral-900 relative z-0">
      <EntryPageTrailer trailer={trailerMovie?.trailer} />
      <EntryPageTrailerDescription trailerMovie={trailerMovie?.trailerData} />
    </div>
  );
};

export default PrimaryContainer;
