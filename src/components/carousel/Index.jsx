import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Carousel = ({ settings, carouselData }) => {
  return (
    <Slider {...settings}>
      {carouselData.map((slid, index) => {
        return <React.Fragment key={index}>{slid}</React.Fragment>;
      })}
    </Slider>
  );
};
export default Carousel;
