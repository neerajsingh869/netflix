import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTrailerSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

const useGetEntryPageTrailer = (topRatedSeries) => {
  const dispatch = useDispatch();
  const { trailerSeries } = useSelector((state) => state.series);

  console.log(trailerSeries);

  useEffect(() => {
    if (topRatedSeries.length > 0) {
      const fetchShowPickedTrailer = async () => {
        const showPicked = topRatedSeries[0];
        const showId = showPicked.id;

        try {
          let response = await fetch(
            `https://api.themoviedb.org/3/tv/${showId}/videos?language=en-US`,
            API_OPTIONS
          );

          response = await response.json();

          console.log(response);

          const filteredTrailers = response.results.filter(
            (show) => show.type === "Trailer"
          );

          console.log(filteredTrailers);

          let mainTrailer;
          if (filteredTrailers) {
            mainTrailer = filteredTrailers[0];
          } else {
            mainTrailer = response.results[0];
          }
          console.log(mainTrailer);

          dispatch(addTrailerSeries(mainTrailer));
        } catch (error) {
          console.log(error.message);
        }
      };

      !trailerSeries && fetchShowPickedTrailer();
    }
  }, [trailerSeries, topRatedSeries, dispatch]);
};

export default useGetEntryPageTrailer;
