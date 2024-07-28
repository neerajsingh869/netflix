/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_URL } from "../utils/constants";
import { MdClose } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";

const ExploreModal = ({ title, data, handleModalVisibility }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  })

  const [content, setContent] = useState(data);
  const [nextPageToken, setNextPageToken] = useState(2);

  const fetchDataViaAPI = async (url) => {
    try {
      let response = await fetch(url + nextPageToken, API_OPTIONS);
      response = await response.json();

      let newContent = content.concat(response.results);
      setContent(newContent);
      setNextPageToken(nextPageToken + 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchMoreData =  () => {
    switch (title) {
      case "Now Playing Movies": {
        fetchDataViaAPI("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=");
        break;
      }
      case "Popular Movies": {
        fetchDataViaAPI("https://api.themoviedb.org/3/movie/popular?language=en-US&page=");
        break;
      }
      case "Top Rated Movies": {
        fetchDataViaAPI("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=");
        break;
      }
      case "Upcoming Movies": {
        fetchDataViaAPI("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=");
        break;
      }
      case "Now Playing Series": {
        fetchDataViaAPI("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=");
        break;
      }
      case "Popular Series": {
        fetchDataViaAPI("https://api.themoviedb.org/3/tv/popular?language=en-US&page=");
        break;
      }
      case "Top Rated Series": {
        fetchDataViaAPI("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=");
        break;
      }
      case "Upcoming Series": {
        fetchDataViaAPI("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=");
        break;
      }
      default:
        return content;
    }
  }

  return (
    <div
      id="scrollableDiv"
      className="fixed bg-black/70 top-0 left-0 h-full w-full z-[2000] flex justify-center overflow-auto"
      onClick={handleModalVisibility}
    > 
      <div>
        <div className="bg-[#181818] min-h-screen w-[80vw] my-4 mx-auto rounded-lg px-8 relative cursor-default" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-center text-center text-xl sm:text-2xl md:text-4xl h-32 sm:h-48 font-extrabold text-white">
            {title}
          </div>
          <InfiniteScroll
            dataLength={content.length}
            next={fetchMoreData}
            hasMore={true}
            scrollableTarget="scrollableDiv"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {content.filter(d => d.poster_path).map((d, index) => (
                <div key={d.id + index + Math.random().toFixed(4)}>
                  <img
                    className="rounded-lg"
                    src={`${IMG_URL}${d.poster_path}`}
                    alt={d.original_title}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
          <div
            className="absolute right-5 top-5 text-white cursor-pointer"
            onClick={handleModalVisibility}
          >
            <MdClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreModal;
