/* eslint-disable react/prop-types */

import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  smallMobile: {
    breakpoint: {max: 463, min: 280},
    items: 2,
    slidesToSlide: 2
  }
};

const CardList = ({ title, data }) => {
  return (
    <div className="pl-12">
      <h2 className="pt-12 pb-4 text-base sm:text-xl font-bold text-white">
        <div className="inline-block cursor-pointer group/title">
          <div className="inline-block mr-3">{title}</div>
          <div className="text-xs text-blue-400 inline-block align-middle ">
            <div className="inline-block mr-1 transition duration-500 opacity-0 -translate-x-20 group-hover/title:opacity-100 group-hover/title:translate-x-0">Explore All</div>
            <div className="text-sm inline-block before:content-['>'] transition duration-300 opacity-0 -translate-x-20 group-hover/title:opacity-100 group-hover/title:translate-x-0"></div>
          </div>
        </div>
      </h2>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={true}
      >
        {data.map((d) => (
            <Card
              key={d.id}
              posterPath={d.poster_path}
              title={d.original_title}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default CardList;
