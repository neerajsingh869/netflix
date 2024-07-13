/* eslint-disable react/prop-types */

import { IMG_URL } from "../utils/constants";

const Card = ({ posterPath, title }) => {
  return (
    <div className="w-36 sm:w-40 md:w-32 lg:w-40 xl:w-44 2xl:w-48 rounded-lg">
      <img className="rounded-lg" src={`${IMG_URL}${posterPath}`} alt={title} />
    </div>
  );
};

export default Card;
