import React from 'react';
import { ReactComponent as Vector } from '../../assets/HomePageVector.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto my-10 xl:my-0 md:my-8 px-4 md:px-16 flex flex-row justify-center items-center xl:h-screen">
      <div className="flex justify-center items-center lg:flex-row flex-col-reverse">
        <div className="flex flex-col items-center lg:items-start justify-center px-2 md:px-0">
          <h1 className="text-5xl xl:text-6xl font-bold text-blue-500 mb-4 text-center lg:text-left">
            {t('home.hero.title')}
          </h1>
          <h2 className="text-4xl xl:text-5xl font-medium text-red-400 mb-6 lg:w-2/6 leading-none text-center lg:text-left">
            {t('home.hero.subtitle')}
          </h2>
          <p className="text-base text-grey-800 mb-8 w-full lg:w-3/5 text-center lg:text-left">
            {t('home.hero.content')}
          </p>
          <button className="justify-center block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 text-center rounded-full transition duration-500 ease-in-out hover:scale-110 transform">
            <Link to="/signup">{t('home.hero.button')}</Link>
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Vector className="w-2/3 lg:w-full xl:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
