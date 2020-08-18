import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import ar from '../../assets/ar.png';
import en from '../../assets/en.png';
const Footer = () => {
  const { t } = useTranslation();
  const selectLanguage = (language) => {
    if (language === 'ar') {
      i18next.changeLanguage('ar');
      document.documentElement.style.setProperty('direction', 'rtl');
    } else {
      i18next.changeLanguage(language);
      document.documentElement.style.setProperty('direction', 'ltr');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-2 lg:px-16">
      <div className="mx-auto xl:pr-8 mt-5 md:mt-1 mb-5 md:mb-1 flex justify-center items-center flex-shrink-0 text-white justify-center">
        <Link className="text-blue-600 font-bold text-xl tracking-tight" to="/">
          Refubook
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link className="text-gray-500 hover:text-blue-600" to="/">
              {t('links.home')}
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-gray-500 hover:text-blue-600" to="/about">
              {t('links.about')}
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-gray-500 hover:text-blue-600" to="/contact">
              {t('links.contact')}
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-gray-500 hover:text-blue-600" to="/blog">
              {t('links.blog')}
            </Link>
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-10 md:mt-1 px-16 flex lg:justify-center">
        <div>
          <div className="flex justify-between">
            <div className="flex justify-between items-center mr-3 ml-3">
              <button
                onClick={() => {
                  selectLanguage('ar');
                }}
                className="text-gray-500 hover:text-blue-600 px-4"
              >
                العربية
              </button>
              <img className="h-3" src={ar} alt="Arabic language" />
            </div>
            <div className="flex justify-between items-center ml-3">
              <button
                onClick={() => {
                  selectLanguage('en');
                }}
                className="text-gray-500 hover:text-blue-600 px-4"
              >
                English
              </button>
              <img className="h-3" src={en} alt="English language" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
