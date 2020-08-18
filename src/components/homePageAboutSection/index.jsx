import React from 'react';
import aboutSectionImg from '../../assets/aboutSectionImg.svg';
//import Carousel from '../carousel/Index';
import AboutCTA from '../aboutCTA';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
/* import {
  aboutCarouselData,
  aboutCarouselSettings,
} from '../../consts/homePageAboutSectionConsts'; */

const aboutCarouselSettings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  slidesToScroll: 1,
};

const HomePageAboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-100">
      <AboutCTA />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:pb-20 md:pb-20 sm:pb-6 pb-20 items-center text-center">
        <div className="w-auto w-1/3 sm:w-full pt-8 mx-auto">
          <img className="w-full lg:w-3/4" src={aboutSectionImg} alt="" />
        </div>
        <div className="w-auto md:w-2/3 sm:w-full pt-8 md:mx-auto lg:mx-auto sm:mx-8">
          <Slider {...aboutCarouselSettings}>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div>
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.reliability')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.reliability')}
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.motivation')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.motivation')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="">
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.efficiency')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.efficiency')}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.creativity')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.creativity')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div>
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.socialCommunication')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.socialCommunication')}
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.valuableIdeas')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.valuableIdeas')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                <div className="">
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.experiences')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.experiences')}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-gray-700 pt-2 text-2xl font-bold">
                    {t('home.about-section.featuresItem.friendlyCommunity')}
                  </h2>
                  <p className="">
                    {t('home.about-section.featuresContent.friendlyCommunity')}
                  </p>
                </div>
              </div>
            </div>
          </Slider>

          {/* <Carousel
            carouselData={aboutCarouselData}
            settings={aboutCarouselSettings}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePageAboutSection;
