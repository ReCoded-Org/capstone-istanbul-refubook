import React from 'react';

const Footer = () => {
  return (
    <footer class="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-white p-6">
      <div class="mx-auto mt-5 md:mt-1 mb-5 md:mb-1 px-16 flex justify-center items-center flex-shrink-0 text-white justify-center">
        <span class="text-gray-800 font-semibold text-xl tracking-tight">
          Refubook
        </span>
      </div>

      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul class="flex justify-center">
          <li class="mr-6">
            <a class="text-gray-500 hover:text-gray-800" href="/">
              Home
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-500 hover:text-gray-800" href="/about">
              About
            </a>
          </li>
          <li class="mr-6">
            <a class="text-gray-500 hover:text-gray-800" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a class="text-gray-500 hover:text-gray-800" href="/blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-10 md:mt-1 px-16">
        <div class="inline-block relative w-32">
          <select class="block appearance-none w-full bg-transparent border border-blue-400 hover:border-blue-500 px-2 md:px-4 py-1 pr-4 md:pr-8 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none focus:shadow-outline">
            <option>English</option>
            <option>Arabic</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
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
