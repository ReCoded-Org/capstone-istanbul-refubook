import React from 'react';
import JobImg from '../../assets/dream-job.png';
import LearnImg from '../../assets/learn.png';
import Ahmad from '../../assets/Ahmad.jpg';
import Rami from '../../assets/Rami.jpg';
import { useTranslation } from 'react-i18next';

function LatestStories() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-wrap items-center justify-evenly bg-blue-100 md:py-16 py-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <header className="px-16 my-4 text-center text-white w-full">
          <h2 className="font-bold text-blue-700 text-3xl text-center">
            {t('home.stories-section.title')}
          </h2>
          <p className="pb-10 xl:w-1/3 xl:mt-2 text-blue-900 mx-auto text-center">
            {t('home.stories-section.subtitle')}
          </p>
        </header>

        <div className="max-w-sm mb-8 xl:mb-0 bg-white rounded overflow-hidden shadow-lg">
          <a href="/">
            <img className="w-full object-cover" src={LearnImg} alt="" />
          </a>
          <div className="px-6 py-4">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {t('home.stories-section.details.language')}
            </span>
            <div className="font-bold text-gray-800  text-xl mb-2">
              {t('home.stories-section.details.language-article-title')}
            </div>

            <p className="text-gray-600 text-base">
              {t('home.stories-section.details.language-article-excerpt')}
            </p>
          </div>

          <div className="px-6 pt-1 pb-6">
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Ahmad}
                  alt=""
                />
              </li>
              <div className="text-sm xl:mt-1">
                <li>
                  <p className="text-gray-500 leading-none font-semibold pt-2">
                    {' '}
                    {t('home.stories-section.details.language-article-author')}{' '}
                  </p>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="max-w-sm mb-8 xl:mb-0 bg-white rounded overflow-hidden shadow-lg">
          <a href="/">
            <img className="w-full object-cover" src={JobImg} alt="" />
          </a>
          <div className="px-6 py-4">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
              {t('home.stories-section.details.jobs')}
            </span>
            <div className="font-bold text-gray-800 text-xl mb-2">
              {t('home.stories-section.details.job-article-title')}
            </div>
            <p className="text-gray-600 text-base">
              {t('home.stories-section.details.job-article-excerpt')}
            </p>
          </div>
          <div className="px-6 pt-1 pb-6">
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Rami}
                  alt=""
                />
              </li>
              <div className="text-sm xl:mt-1">
                <li>
                  <p className="text-gray-500 leading-none font-semibold pt-2 text">
                    {' '}
                    {t('home.stories-section.details.job-article-author')}{' '}
                  </p>
                </li>
                <br></br>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default LatestStories;
