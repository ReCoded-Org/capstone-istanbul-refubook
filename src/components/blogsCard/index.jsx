import React from 'react';

const BlogsCard = () => {
  return (
    <div className="py-64 flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-md">
        <img
          className="w-full"
          src="https://via.placeholder.com/350x200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <a href="/">
              How I learned Turkish quickly and what are the best places to learn.
            </a>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>

        <div className="px-6 py-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://via.placeholder.com/150"
            alt="Avatar of Ahmad Faysal"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Ahmad Faysal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
