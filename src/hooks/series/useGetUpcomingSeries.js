import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUpcomingSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

// responsible for fetching upcomingSeries from TMDB and
// dispatch an action to update state to store those series
const useGetUpcomingSeries = () => {
  const dispatch = useDispatch();
  const { upcomingSeries } = useSelector((state) => state.series);

  useEffect(() => {
    const getUpcomingSeries = () => {
      fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addUpcomingSeries(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!upcomingSeries || upcomingSeries.length === 0) && getUpcomingSeries();
  }, [upcomingSeries, dispatch]);
};

export default useGetUpcomingSeries;
