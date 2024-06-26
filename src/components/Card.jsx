/* eslint-disable react/prop-types */

import { IMG_URL } from "../utils/constants";

const Card = ({ posterPath, title }) => {
  return (
    <div className="w-40 rounded-lg">
      <img className="rounded-lg" src={`${IMG_URL}${posterPath}`} alt={title} />
    </div>
  );
};

export default Card;
