import React from 'react';
import Image from '../../assets/Image.png';

function LatestStories() {
    return (
        <>
    <body className="flex flex-wrap items-center justify-evenly bg-blue-500  py-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <header className="px-16 text-white bg-blue-500 w-full">
            <p className="font-bold text-white text-xl text-center">
                Latest Stories
            </p>
            <p className="pb-10 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
        </header>
        <div class="max-w-sm rounded overflow-hidden border-solid">
                <img class="px-2 w-full object-cover" src={Image}/>
                <div class="px-6 py-4">
                    <div class="font-bold text-white text-xl mb-2">The Latest Story</div>
                    <p class="text-gray-400 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-1 pb-6">
                <span class="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">Language</span>
                <ul className="flex center-items">
                <li><img class="w-10 h-10 rounded-full mr-4 object-cover" src={Image}/></li>
                    <div class="text-sm">
                        <li><p class="text-white leading-none font-semibold pt-2"> User Name </p></li>
                        <br></br>
                    </div>
                </ul>
                </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden">
                <img class="px-2 w-full object-cover" src={Image}/>
                <div class="px-6 py-4">
                    <div class="font-bold text-white text-xl mb-2">The Latest Story</div>
                    <p class="text-gray-400 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-1 pb-6">
                <span class="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">Language</span>
                <ul className="flex center-items">
                <li><img class="w-10 h-10 rounded-full mr-4 object-cover" src={Image}/></li>
                    <div class="text-sm">
                        <li><p class="text-white leading-none font-semibold pt-2 text"> User Name </p></li>
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
