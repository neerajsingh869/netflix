import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNowPlayingSeries } from "../../redux/slices/showSlice";
import { API_OPTIONS } from "../../utils/constants";

// responsible for fetching nowPlayingSeries from TMDB and
// dispatch an action to update state to store those series
const useGetNowPlayingSeries = () => {
  const dispatch = useDispatch();
  const {nowPlayingSeries} = useSelector(state => state.series);

  useEffect(() => {
    const getNowPlayingSeries = () => {
      fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_OPTIONS
      )
        .then((response) => response.json())
        .then((response) => {
          dispatch(addNowPlayingSeries(response.results));
        })
        .catch((err) => console.error(err));
    };

    (!nowPlayingSeries || nowPlayingSeries.length === 0) && getNowPlayingSeries();
  }, [nowPlayingSeries, dispatch]);
};

export default useGetNowPlayingSeries;
