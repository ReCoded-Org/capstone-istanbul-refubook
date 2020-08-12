import React from 'react';
import {
  testimonialsCarouselSettings,
  OurProductsCarouselSettings,
  ourPartnersInfo,
  testimonialsInfo,
} from '../../consts/TestimonialsConsts';
import Carousel from '../carousel/Index';
import WorldMap from '../../assets/world_map1.jpg';

function Testimonials() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:pt-56 xl:pl-56 sm:pt-64  pt-20 space-y-6 ">
        <div className="w-auto sm:w-1/2 md:w-full lg:w-32 xl:w-2/4 pt-10">
          <img alt="world Map" src={WorldMap} />
        </div>
        <div className="w-auto text-center sm:w-1/2 md:w-full lg:w-32 xl:w-2/4 pt-10 ">
          <Carousel
            settings={testimonialsCarouselSettings}
            carouselData={testimonialsInfo}
          ></Carousel>
        </div>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="pt-16 pl-18 pb-20 sm:pl-10 lg:pl-34">
          <h1 className="capitalize text-center text-xl">our partners</h1>
        </div>
        <div className="pl-4">
          <Carousel
            settings={OurProductsCarouselSettings}
            carouselData={ourPartnersInfo}
          ></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
