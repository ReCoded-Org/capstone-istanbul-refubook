import React from 'react';
import { ReactComponent as ImageIcon } from '../../assets/imageIcon.svg';
import { useTranslation } from 'react-i18next';

const AboutPageCTA = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mx-8 xl:pt-56  sm:pt-64  pt-20 space-y-6 ">
      <ImageIcon className="mx-auto" />

      <h2 className="text-blue-700 text-2xl">{t('about.aboutPageCTA.title')}</h2>
      <p className="mx-auto lg:px-40 sm:px-20">{t('about.aboutPageCTA.text')}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        {t('about.aboutPageCTA.SignUp')}
      </button>
    </div>
  );
};

export default AboutPageCTA;
