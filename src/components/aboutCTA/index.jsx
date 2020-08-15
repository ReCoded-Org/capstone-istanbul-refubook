import React from 'react';
import { useTranslation } from 'react-i18next';
const AboutCTA = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center mx-8 xl:pt-20  sm:pt-10  pt-20 space-y-6 ">
      <h2 className="text-blue-700 font-bold text-3xl">
        {t('home.about-section.title')}
      </h2>
      <p className="mx-auto lg:px-40 sm:px-20">{t('home.about-section.content')}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {t('home.about-section.button')}
      </button>
    </div>
  );
};

export default AboutCTA;
