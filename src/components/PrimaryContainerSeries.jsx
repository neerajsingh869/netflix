import { useSelector } from "react-redux";

import EntryPageTrailer from "./EntryPageTrailer";
import EntryPageTrailerDescription from "./EntryPageTrailerDescription";
import useGetEntryPageTrailerSeries from "../hooks/series/useGetEntryPageTrailerSeries";

const PrimaryContainerSeries = () => {
  const { trailerSeries } = useSelector(
    (store) => store.series
  );

  // custom hook to dispatch action to add trailer in series store
  useGetEntryPageTrailerSeries();

  if (!trailerSeries) return null;

  return (
    <div className="bg-neutral-900 relative z-0">
      <EntryPageTrailer trailer={trailerSeries?.trailer} />
      <EntryPageTrailerDescription trailerMovie={trailerSeries?.trailerData} />
    </div>
  );
};

export default PrimaryContainerSeries;
