import React from 'react';
import { useTranslation } from 'react-i18next';
import cover from '../../assets/cta.png';
import { Link } from 'react-router-dom';
const style = {
  coverPhoto: {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
};

const AboutPageCTA = () => {
  const { t } = useTranslation();

  return (
    <div
      style={style.coverPhoto}
      className="text-center flex flex-column items-center justify-center w-full py-16 md:py-24 lg:py-32"
    >
      <div className="felx-col items-center">
        <h2 className="text-white font-bold text-2xl pb-8">
          {t('about.aboutPageCTA.title')}
        </h2>
        <p className="mx-auto text-gray-200 xl:w-3/4 lg:px-40 sm:px-20 pb-8">
          {t('about.aboutPageCTA.text')}
        </p>
        <button className="justify-center mx-auto block appearance-none bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-8 text-center rounded-full transition duration-500 ease-in-out hover:scale-110 transform">
          <Link to="/signup">{t('about.aboutPageCTA.SignUp')}</Link>
        </button>
      </div>
      {/*       <img
        className=" object-cover w-full h-64 mx-auto opacity-75"
        src={cover}
        alt=""
      /> */}
    </div>
  );
};

export default AboutPageCTA;
