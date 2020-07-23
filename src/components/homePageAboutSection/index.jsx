import React from 'react';
import aboutSectionImg from '../../assets/aboutSectionImg.svg';
import Carousel from '../carousel';
import AboutCTA from '../aboutCTA';
import {
  aboutCarouselData,
  aboutCarouselSettings,
} from '../../consts/homePageAboutSectionConsts';

const HomePageAboutSection = () => {
  return (
    <div className="bg-blue-100">
      <AboutCTA />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:pb-20 md:pb-20 sm:pb-6 pb-20 items-center text-center">
        <div className="w-auto md:w-1/2 sm:w-full pt-8 md:mx-auto lg:mx-auto sm:mx-8">
          <Carousel
            carouselData={aboutCarouselData}
            settings={aboutCarouselSettings}
          />
        </div>
        <div className="w-auto w-1/2 sm:w-full pt-8 mx-auto">
          <img src={aboutSectionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutSection;
