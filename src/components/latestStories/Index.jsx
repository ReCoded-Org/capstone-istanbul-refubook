import React from 'react';
import Image from '../../assets/Image.png';

function LatestStories() {
  return (
    <>
      <body className="flex flex-wrap items-center justify-evenly bg-blue-500  py-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <header className="px-16 text-white bg-blue-500 w-full">
          <p className="font-bold text-white text-xl text-center">Latest Stories</p>
          <p className="pb-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla!
          </p>
        </header>
        <div className="max-w-sm rounded overflow-hidden border-solid">
          <img className="px-2 w-full object-cover" src={Image} />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">The Latest Story</div>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
              nihil.
            </p>
          </div>
          <div className="px-6 pt-1 pb-6">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">
              Language
            </span>
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Image}
                />
              </li>
              <div className="text-sm">
                <li>
                  <p className="text-white leading-none font-semibold pt-2">
                    {' '}
                    User Name{' '}
                  </p>
                </li>
                <br></br>
              </div>
            </ul>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden">
          <img className="px-2 w-full object-cover" src={Image} />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">The Latest Story</div>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
              quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
              nihil.
            </p>
          </div>
          <div className="px-6 pt-1 pb-6">
            <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">
              Language
            </span>
            <ul className="flex center-items">
              <li>
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={Image}
                />
              </li>
              <div className="text-sm">
                <li>
                  <p className="text-white leading-none font-semibold pt-2 text">
                    {' '}
                    User Name{' '}
                  </p>
                </li>
                <br></br>
              </div>
            </ul>
          </div>
        </div>
      </body>
    </>
  );
}
export default LatestStories;
