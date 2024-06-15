import { useEffect } from "react"
import Header from "../components/Header"
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = () => {
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        dispatch(addNowPlayingMovies(response.results));
      })
      .catch(err => console.error(err));
    }

    getPopularMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse