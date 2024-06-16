/* eslint-disable react/prop-types */
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const EntryPageTrailerDescription = ({trailerMovie}) => {
  console.log(trailerMovie);
  const {original_title, overview} = trailerMovie;

  return (
    <div className="absolute top-1/3 w-1/4 left-12 font-bold text-white">
      <p className="text-5xl mb-4">{original_title}</p>
      <p className="text-lg">{overview}</p>
      <div className="flex gap-6 mt-4">
        <button type="button" className="bg-white text-black w-36 h-12 rounded-lg text-lg flex items-center justify-center"><IoMdPlay size={26} />Play</button>
        <button type="button" className="bg-white text-black w-44 h-12 rounded-lg text-lg flex items-center justify-center"><IoMdInformationCircleOutline size={26} />More Info</button>
      </div>
    </div>
  )
}

export default EntryPageTrailerDescription