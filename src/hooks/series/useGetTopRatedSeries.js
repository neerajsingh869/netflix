import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTopRatedSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

// responsible for fetching topRatedSeries from TMDB and
// dispatch an action to update state to store those series
const useGetTopRatedSeries = () => {
  const dispatch = useDispatch();
  const { topRatedSeries } = useSelector((state) => state.series);

  useEffect(() => {
    const getTopRatedSeries = () => {
      fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addTopRatedSeries(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!topRatedSeries || topRatedSeries.length === 0) && getTopRatedSeries();
  }, [topRatedSeries, dispatch]);
};

export default useGetTopRatedSeries;
