import React from 'react';
import BlogsCard from '../components/blogsCard/';
import { articlesDataBase } from './articles';

export const BlogsCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const BlogsInfo = [
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
  <BlogsCard article={articlesDataBase} />,
];
export const BlogsAsHTML = [
  <div className="py-8 mx-2 flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>Mozilla: The Greatest Tech Company Left Behind</p>
        </div>
        <p className="text-gray-700 text-base">
          How could an organization that had its hand in so many world-changing
          technologies fail to thrive?
        </p>
      </div>

      <div className="px-6 py-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://miro.medium.com/fit/c/128/128/1*sSR_cfRyUkBoM7L1pUYoYA.jpeg"
          alt={`Avatar of Florin Pop `}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Florin Pop</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="py-8 mx-2 flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>15 App Ideas to Build and Level Up your Coding Skills</p>
        </div>
        <p className="text-gray-700 text-base">
          App ideas that are great to improve your coding skills, experiment with new
          technologies and add to your portfolio!
        </p>
      </div>

      <div className="px-6 py-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://miro.medium.com/fit/c/96/96/1*6yPj-9aMYxi0Xnk5XNa0Lg.jpeg"
          alt={`Avatar of Florin Pop `}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Matthew MacDonald</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="py-8 mx-2 flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>How To Use Redux with React Hooks</p>
        </div>
        <p className="text-gray-700 text-base">Write less code, but better code</p>
      </div>

      <div className="px-6 py-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://miro.medium.com/fit/c/96/96/1*Rhzd_aZYgwP2gocFecKi0Q.png"
          alt={`Avatar of Florin Pop `}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Indrek Lasn</p>
        </div>
      </div>
    </div>
  </div>,
  <div className="py-8 mx-2 flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-md">
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <p>The 6 Major Changes in React v17.0</p>
        </div>
        <p className="text-gray-700 text-base">
          Surprisingly, there are no new features, just improvements
        </p>
      </div>

      <div className="px-6 py-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://miro.medium.com/fit/c/96/96/1*b4-PqV_5VnLqO_SOeO0M9A.jpeg"
          alt={`Avatar of Florin Pop `}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Mr Herath</p>
        </div>
      </div>
    </div>
  </div>,
];
