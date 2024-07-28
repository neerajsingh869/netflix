import { useSelector } from "react-redux";

import CardList from "./CardList";

const SecondaryContainerSeries = () => {
  const series = useSelector((store) => store.series);

  return (
    <div className="bg-neutral-900 sm:-top-12 sm:-mb-12 lg:-top-28 lg:-mb-28 xl:-top-40 xl:-mb-40 z-10 relative pb-16">
      <div className="relative bg-transparent -top-0 -mb-0 2xl:-top-44 2xl:-mb-44">
        <div className="">
          <CardList
            title={"Now Playing Series"}
            data={series?.nowPlayingSeries}
          />
          <CardList title={"Popular Series"} data={series?.popularSeries} />
          <CardList title={"Top Rated Series"} data={series?.topRatedSeries} />
          <CardList title={"Upcoming Series"} data={series?.upcomingSeries} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainerSeries;
