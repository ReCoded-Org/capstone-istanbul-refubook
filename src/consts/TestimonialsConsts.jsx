import React from 'react';
import WorldMap from '../assets/world_map1.jpg';
export const testimonialsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 2,
};
export const OurProductsCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export const ourPartnersInfo = [
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
  <div>
    <img alt="our Partner" className=" w-24 sm:w-24 xl:w-56" src={WorldMap} />
  </div>,
];
export const testimonialsInfo = [
  <div>
    <h3 className="">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="">
      Two lines of a short testimonial from someone want to say something, and can
      say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
];
