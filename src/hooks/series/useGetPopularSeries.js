import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPopularSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

// responsible for fetching popularSeries from TMDB and
// dispatch an action to update state to store those series
const useGetPopularSeries = () => {
  const dispatch = useDispatch();
  const { popularSeries } = useSelector((state) => state.series);

  useEffect(() => {
    const getPopularSeries = () => {
      fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addPopularSeries(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!popularSeries || popularSeries.length === 0) && getPopularSeries();
  }, [popularSeries, dispatch]);
};

export default useGetPopularSeries;
