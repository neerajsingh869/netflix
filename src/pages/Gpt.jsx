import { useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import netflixBgBanner from "../assets/netflix-bg.jpg";
import openai from "../configs/openai";
import {
  API_OPTIONS,
  GPT_MODEL,
  OPENAI_SYSTEM_INSTRUCTION,
} from "../utils/constants";
import { addRecommendedMovies } from "../redux/slices/gptSlice";

const Gpt = () => {
  let searchRef = useRef("");
  const dispatch = useDispatch();

  // function to get data for a particular movie from tmdb
  const getTmdbDataForMovie = async (movie) => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      response = await response.json();

      return response.results;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onGptSearchResults = async (e) => {
    e.preventDefault();

    try {
      const gptResponse = await openai.chat.completions.create({
        messages: [
          { role: "system", content: OPENAI_SYSTEM_INSTRUCTION },
          { role: "user", content: searchRef.current.value },
        ],
        model: GPT_MODEL,
      });

      let gptRecommendations = gptResponse.choices[0]?.message?.content;
      let recommendedMoviesName = gptRecommendations.split(",");

      let tmdbDataForRecommendatedMovies = recommendedMoviesName.map((movie) =>
        getTmdbDataForMovie(movie)
      );
      tmdbDataForRecommendatedMovies = await Promise.all(
        tmdbDataForRecommendatedMovies
      );

      let allRecommendedMovies = tmdbDataForRecommendatedMovies.flat();
      allRecommendedMovies = allRecommendedMovies.filter(
        (movie, index) => index < 20
      );

      dispatch(
        addRecommendedMovies({
          gptMovies: allRecommendedMovies,
          gptMoviesName: recommendedMoviesName,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // searchRef.current.value = "";
  };

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover absolute"
        src={netflixBgBanner}
        alt="Background Banner"
      />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 bg-black h-20 w-2/5 flex items-center p-6 rounded-lg justify-center">
        <form className="flex gap-6 w-full">
          <input
            ref={searchRef}
            className="w-4/5 p-2 rounded-lg outline-none"
            type="text"
            placeholder="What would you like to watch today?"
          />
          <button
            className="text-white bg-red-600 p-2 px-4 rounded-lg grow"
            onClick={onGptSearchResults}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gpt;
