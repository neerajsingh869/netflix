import { useSelector } from "react-redux";

import EntryPageTrailer from "./EntryPageTrailer";
import EntryPageTrailerDescription from "./EntryPageTrailerDescription";
import useGetEntryPageTrailerSeries from "../hooks/series/useGetEntryPageTrailerSeries";

const PrimaryContainerSeries = () => {
  const { topRatedSeries, trailerSeries } = useSelector(
    (store) => store.series
  );

  // custom hook to dispatch action to add trailer in series store
  useGetEntryPageTrailerSeries(topRatedSeries);

  if (topRatedSeries.length === 0 || !trailerSeries) return null;

  return (
    <div className="bg-neutral-900 relative z-10 sm:z-0">
      <EntryPageTrailer trailer={trailerSeries} />
      <EntryPageTrailerDescription trailerMovie={topRatedSeries[0]} />
    </div>
  );
};

export default PrimaryContainerSeries;
