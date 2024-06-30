import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import openai from "../configs/openai";
import {
  API_OPTIONS,
  GPT_MODEL,
  OPENAI_SYSTEM_INSTRUCTION,
} from "../utils/constants";
import { addRecommendedMovies, reset } from "../redux/slices/gptSlice";
import CardList from "../components/CardList";

const Gpt = () => {
  let searchRef = useRef("");
  const dispatch = useDispatch();

  const { gptMovies, gptMoviesName } = useSelector((store) => store.gpt);

  useEffect(() => {
    return () => dispatch(reset());
  }, [dispatch]);

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

      tmdbDataForRecommendatedMovies = tmdbDataForRecommendatedMovies.map(
        (movies) => {
          movies = movies.filter((movie) => movie?.backdrop_path);

          return movies;
        }
      );

      dispatch(
        addRecommendedMovies({
          gptMovies: tmdbDataForRecommendatedMovies,
          gptMoviesName: recommendedMoviesName,
        })
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="w-screen h-screen fixed top- -z-10 bg-neutral-900"></div>
      <div className="fixed z-30 top-28 left-1/2 -translate-x-1/2 bg-black h-20 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex items-center p-2 sm:p-6 rounded-lg justify-center">
        <form className="flex gap-2 sm:gap-4 md:gap-6 w-full">
          <input
            ref={searchRef}
            className="w-4/5 p-1 sm:p-2 rounded-lg outline-none text-sm sm:text-base"
            type="text"
            placeholder="What would you like to watch today?"
          />
          <button
            className="text-white bg-red-600 p-2 px-4 rounded-lg grow text-sm sm:text-base"
            onClick={onGptSearchResults}
          >
            Search
          </button>
        </form>
      </div>
      <div className="bg-neutral-900 h-64 w-screen fixed z-20"></div>
      <div className="flex flex-col justify-center relative top-96">
        <div className="-mt-40 z-10 mb-16">
          {gptMoviesName.map((movieName, index) => (
            <CardList key={index} title={movieName} data={gptMovies[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gpt;
