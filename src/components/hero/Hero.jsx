import React from 'react';
import { ReactComponent as Vector } from '../../assets/HomePageVector.svg';

const Hero = () => {
  return (
    <section className="container mx-auto mt-10 md:mt-1 px-4 md:px-16 flex flex-row justify-center items-center h-screen">
      <div className="flex justify-center items-center md:flex-row flex-col-reverse">
        <div className="flex flex-col items-center md:items-start justify-center px-2 md:px-0">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-500 mb-4 text-center md:text-left">
            Refubook
          </h1>
          <h2 className="text-4xl md:text-5xl font-medium text-red-400 mb-6 md:w-2/6 leading-none text-center md:text-left">
            Express Freely
          </h2>
          <p className="text-base text-grey-800 mb-8 w-full md:w-3/5 text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
            facere aut eaque, consequuntur eveniet! Natus, iure. Vel, eius laborum.
          </p>
          <button className="bg-blue-500 text-white font-bold hover:bg-blue-700 py-2 px-8 rounded-full">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <Vector className="w-3/4 md:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
