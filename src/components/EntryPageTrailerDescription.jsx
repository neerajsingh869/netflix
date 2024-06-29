/* eslint-disable react/prop-types */
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const EntryPageTrailerDescription = ({ trailerMovie }) => {
  const { original_title, overview } = trailerMovie;

  return (
    <div className="absolute top-20 sm:top-1/3 w-40 sm:w-60 md:w-72 left-6 lg:left-12 lg:w-1/4 text-white">
      <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 sm:mb-3 lg:mb-6 font-bold">
        {original_title}
      </p>
      <div className="text-sm sm:text-base md:text-lg line-clamp-2 sm:line-clamp-3">{overview}</div>
      <div className="flex gap-3 lg:gap-6 mt-4">
        <button
          type="button"
          className="font-bold bg-white hover:bg-white/80 text-black w-28 lg:w-32 h-7 sm:h-10 lg:h-12 rounded-lg text-base lg:text-lg flex items-center justify-center"
        >
          <IoMdPlay />
          <span className="p1-0 sm:pl-1 text-xs sm:text-base">Play</span>
        </button>
        <button
          type="button"
          className="font-bold bg-gray-500/60 hover:bg-gray-500/80 text-white w-40 lg:w-40 h-7 sm:h-10 lg:h-12 rounded-lg text-base lg:text-lg flex items-center justify-center"
        >
          <IoMdInformationCircleOutline />
          <span className="pl-1 text-xs sm:text-base">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default EntryPageTrailerDescription;
