import PrimaryContainerSeries from "../components/PrimaryContainerSeries";
import SecondaryContainerSeries from "../components/SecondaryContainerSeries";
import useGetNowPlayingSeries from "../hooks/series/useGetNowPlayingSeries";
import useGetPopularSeries from "../hooks/series/useGetPopularSeries";
import useGetTopRatedSeries from "../hooks/series/useGetTopRatedSeries";
import useGetUpcomingSeries from "../hooks/series/useGetUpcomingSeries";

const BrowseSeries = () => {
  useGetNowPlayingSeries();
  useGetPopularSeries();
  useGetUpcomingSeries();
  useGetTopRatedSeries();

  return (
    <div className="overflow-hidden">
      <PrimaryContainerSeries />
      <SecondaryContainerSeries />
    </div>
  );
};

export default BrowseSeries;
