import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTrailerSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

const useGetEntryPageTrailer = () => {
  const dispatch = useDispatch();
  const { trailerSeries, topRatedSeries } = useSelector((state) => state.series);

  useEffect(() => {
    if (topRatedSeries.length > 0) {
      const fetchShowPickedTrailer = async () => {
        const showPicked = topRatedSeries.filter(series => series.original_language === "en")[0];
        const showId = showPicked.id;

        try {
          let response = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US`,
            API_OPTIONS
          );

          response = await response.json();

          const filteredTrailers = response.results.filter(
            (show) => show.type === "Trailer"
          );

          let mainTrailer;
          if (filteredTrailers) {
            mainTrailer = filteredTrailers[0];
          } else {
            mainTrailer = response.results[0];
          }

          dispatch(addTrailerSeries({trailer: mainTrailer, trailerData: showPicked}));
        } catch (error) {
          console.log(error.message);
        }
      };

      !trailerSeries && fetchShowPickedTrailer();
    }
  }, [trailerSeries, topRatedSeries, dispatch]);
};

export default useGetEntryPageTrailer;
