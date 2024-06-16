import EntryPageTrailer from "./EntryPageTrailer"
import EntryPageTrailerDescription from "./EntryPageTrailerDescription"
import useEntryPageTrailer from "../hooks/useEntryPageTrailer";
import { useSelector } from "react-redux";

const PrimaryContainer = () => {
  const {nowPlayingMovies, trailer} = useSelector(store => store.movies);
  
  // custom hook to dispatch action to add trailer
  // in movies store
  useEntryPageTrailer(nowPlayingMovies);

  if (nowPlayingMovies.length === 0 || !trailer) return null;

  return (
    <div>
      <EntryPageTrailer trailer={trailer} />
      <EntryPageTrailerDescription /> 
    </div>
  )
}

export default PrimaryContainer