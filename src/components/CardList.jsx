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
      <h2 className="pt-12 pb-4 text-xl font-bold text-white">{title}</h2>
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
