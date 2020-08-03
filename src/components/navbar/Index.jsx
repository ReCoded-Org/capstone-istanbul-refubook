import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ NavbarStyle }) {
  return (
    <>
      <div className={NavbarStyle}>
        <div className="mx-auto mt-5 md:mt-2 mb-5 md:mb-1 px-8 flex justify-center items-center flex-shrink-0 text-white justify-center">
          <span className="text-blue-600 font-bold text-xl tracking-tight">
            Refubook
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <ul className="flex justify-center">
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/about">
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link className="text-gray-500 hover:text-blue-600" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 hover:text-blue-600" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-5 md:mt-1 px-16">
          <div className="inline-block relative">
            <button className="block appearance-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
