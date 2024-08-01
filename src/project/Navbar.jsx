import React, { Fragment, useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <div className="shadow-md w-full fixed z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <span className="flex text-2xl md:text-3xl text-black mr-1 justify-between">
            <img
              src="https://images.squarespace-cdn.com/content/v1/54e549e3e4b03ef750d7930f/1426612015227-VM07MRI73UHGGMQNXTP3/studio-mc2-logo+copy.jpg?format=1500w"
              alt="Studio MC²"
              width="50"
            />
            <button
              className="md:hidden flex"
              onClick={() => setIsVisible(!isVisible)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </span>

          <ul
            className={`md:flex items-center md:justify-end md:my-0 my-5 ${
              isVisible ? "" : "hidden"
            } md:flex-row`}
          >
            <li className="md:ml-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-500 font-merriweather hover:text-orange-600 duration-500 text-sm md:text-lg"
              >
                Home
              </Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="text-gray-500 font-merriweather hover:text-orange-600 duration-500 text-sm md:text-lg"
              >
                Services
              </Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link
                to="collections"
                smooth={true}
                duration={500}
                className="text-gray-500 font-merriweather hover:text-orange-600 duration-500 text-sm md:text-lg"
              >
                Collections
              </Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-gray-500 font-merriweather hover:text-orange-600 duration-500 text-sm md:text-lg"
              >
                About
              </Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-500 font-merriweather hover:text-orange-600 duration-500 text-sm md:text-lg"
              >
                Contact
              </Link>
            </li>
            <li className="md:ml-8 mt-2 md:mt-0">
              <button
                type="button"
                className="border-2 py-1 px-2 font-merriweather text-xs rounded-lg text-orange-500 md:text-lg hover:border-orange-400 hover:bg-orange-500 hover:text-white duration-500"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
