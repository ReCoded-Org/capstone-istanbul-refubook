import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
const Footer = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-2">
      <div className="mx-auto mt-5 md:mt-1 mb-5 md:mb-1 px-16 flex justify-center items-center flex-shrink-0 text-white justify-center">
        <span className="text-gray-800 font-semibold text-xl tracking-tight">
          Refubook
        </span>
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
          <li>
            <Link className="text-gray-500 hover:text-blue-600" to="/blog">
              {t('links.blog')}
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-10 md:mt-1 px-16">
        <div className="inline-block relative w-32">
          <select className="block appearance-none w-full bg-transparent border border-blue-400 hover:border-blue-500 px-2 md:px-4 py-1 pr-4 md:pr-8 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none focus:shadow-outline">
            <option
              onChange={() => {
                changeLanguage('en');
                i18next.dir('ltr');
              }}
              value="en"
            >
              English
            </option>
            <option
              onChange={() => {
                changeLanguage('ar');
                i18next.dir('rtl');
              }}
              value="ar"
            >
              Arabic
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
