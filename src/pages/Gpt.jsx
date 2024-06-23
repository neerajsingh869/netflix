import { useRef } from "react";
import netflixBgBanner from "../assets/netflix-bg.jpg";
import openai from "../configs/openai";
import { API_OPTIONS, OPENAI_SYSTEM_INSTRUCTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../redux/slices/gptSlice";

const Gpt = () => {
  let searchRef = useRef("");
  const dispatch = useDispatch();

  const getTmdbSearchResultForMovie = async (movie) => {
    try { 
      let response = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);

      response = await response.json();

      console.log(response);
      return response.results;
    } catch (error) {
      console.log(error);
    }
  }

  const onSearchGptResults = async (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);

    try {
      const gptResponse = await openai.chat.completions.create({
        messages: [
          { role: "system", content: OPENAI_SYSTEM_INSTRUCTION },
          { role: "user", content: searchRef.current.value }
        ],
        model: "gpt-3.5-turbo",
      });
  
      let gptRecommendations = gptResponse.choices[0]?.message?.content;
      let recommendedMoviesName = gptRecommendations.split(",");
  
      let tmdbSearchMoviesResult = recommendedMoviesName.map(movie => getTmdbSearchResultForMovie(movie));
  
      tmdbSearchMoviesResult = await Promise.all(tmdbSearchMoviesResult);
      let recommendedMovies = tmdbSearchMoviesResult.flat();
      recommendedMovies = recommendedMovies.filter((movie, index) => index < 20);
    
      console.log(recommendedMovies);
      console.log(recommendedMoviesName);

      dispatch(addRecommendedMovies({recommendedMovies, recommendedMoviesName}));
    } catch (error) {
      console.log(error);
    }
    // searchRef.current.value = "";
  }

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover absolute"
        src={netflixBgBanner}
        alt="Background Banner"
      />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 bg-black h-20 w-2/5 flex items-center p-6 rounded-lg justify-center">
        <form className="flex gap-6 w-full">
          <input ref={searchRef} className="w-4/5 p-2 rounded-lg outline-none" type="text" placeholder="What would you like to watch today?" />
          <button className="text-white bg-red-600 p-2 px-4 rounded-lg grow" onClick={onSearchGptResults}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Gpt;