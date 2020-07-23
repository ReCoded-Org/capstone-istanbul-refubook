import React from 'react';

function Navbar() {
  return (
    <div>
      <header className="px-8 px-6 py-2 bg-white flex flex-wrap items-center lg:py-0 py-0 text-center">
        <div className="flex flex-1 justify-between">
          <a href="#">
            <p className="text-blue-500 text-xl font-bold py-6 text-center items-center">
              Refubook
            </p>
          </a>
          <div className="py-6 flex sm:items-center sm:w-auto lg:flex lg:items-center lg:w-auto">
            <nav>
              <ul className="lg:flex items-center justify-between text-base text-gray-500 lg:pt-0 sm:flex justify-center items-center">
                <li>
                  <a
                    href="#"
                    className="sm:px-2 lg:p-4 py-3 px-0 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="sm:px-2 lg:p-4 py-3 px-0 hover:text-blue-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="sm:px-2 lg:p-4 py-3 px-0 hover:text-blue-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="sm:px-2 lg:p-4 py-3 px-0 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full ">
                    <a>Sign in</a>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
