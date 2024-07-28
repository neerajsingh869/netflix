/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { IMG_URL } from "../utils/constants";
import { MdClose } from "react-icons/md";

const ExploreModal = ({ title, data, handleModalVisibility }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  })

  return (
    <div
      className="fixed bg-black/70 top-0 left-0 h-full w-full z-[2000] flex justify-center overflow-auto"
      onClick={handleModalVisibility}
    > 
      <div>
        <div className="bg-[#181818] min-h-screen w-[80vw] my-4 mx-auto rounded-lg px-8 relative cursor-default" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-center text-center text-4xl h-48 font-extrabold text-white">
            {title}
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-6 gap-5">
            {data.map((d) => (
              <div key={d.id}>
                <img
                  className="rounded-lg"
                  src={`${IMG_URL}${d.poster_path}`}
                  alt={d.original_title}
                />
              </div>
            ))}
          </div>
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
