/* eslint-disable react/prop-types */
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ShowMoreText from "react-show-more-text";

const EntryPageTrailerDescription = ({trailerMovie}) => {
  console.log(trailerMovie);
  const {original_title, overview} = trailerMovie;

  return (
    <div className="absolute top-1/2 sm:top-1/3 w-72 left-6 lg:left-12 lg:w-96 text-white">
      <p className="text-3xl lg:text-5xl  mb-3 lg:mb-6 font-bold">{original_title}</p>
      <p className="text-lg">
        <ShowMoreText
          lines={3}
          more="...more"
          less="Show less"
          expanded={false}
          anchorClass="cursor-pointer text-base lg:text-lg font-bold"
          className="text-base lg:text-lg"
        >
          {overview}
        </ShowMoreText>
      </p>
      <div className="flex gap-3 lg:gap-6 mt-4">
        <button type="button" className="font-bold bg-white hover:bg-white/80 text-black w-24 lg:w-32 h-10 lg:h-12 rounded-lg text-base lg:text-lg flex items-center justify-center"><IoMdPlay size={24} /><span className="pl-1">Play</span></button>
        <button type="button" className="font-bold bg-gray-500/60 hover:bg-gray-500/80 text-white w-32 lg:w-40 h-10 lg:h-12 rounded-lg text-base lg:text-lg flex items-center justify-center"><IoMdInformationCircleOutline size={24} /><span className="pl-1">More Info</span></button>
      </div>
    </div>
  )
}

export default EntryPageTrailerDescription