import React, { Fragment, useState, Link } from "react";
import { img4 } from "../assets/images";
import WeddingPhotos from "./OurServices/WeddingPhotos";

const Services1 = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
  };
  return (
    <Fragment>
      <div className="pt-5">
        <div className="relative p-4 sm:p-10">
          {/* divider */}
          <div className="absolute inset-0 flex items-center">
            <div className="border border-slate-200 w-10/12 sm:w-9/12 mx-auto"></div>
          </div>
          {/* text */}
          <div className="flex justify-center items-center relative">
            <div className="font-display text-lg sm:text-3xl text-slate-500 bg-white px-4 sm:px-6 py-2 sm:py-4">
              Our Services
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:p-10 py-10 bg-black justify-center items-center">
        <div className="md:flex items-center justify-center hidden md:visible">
          {/* image */}
          <img src={img4} alt="img4" className="w-auto h-5/6" />
        </div>
        <div className=" items-center w-full ">
          {/* content */}
          <div className="text-white font-merriweather md:text-5xl text-xl flex justify-center sm:justify-start">
            Our Services
          </div>

          <ul className="text-white mt-10 flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <div>
              <li className="text-sm md:text-3xl font-merriweather px-10  md:mt-10 mt-5">
                <a href="/" onClick={<WeddingPhotos />}>
                  Wedding Photography
                </a>
              </li>
            </div>

            <div className="text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5">
              <li>
                <a href="/">Pre & Post Wedding</a>
              </li>
            </div>

            <div className=" text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5">
              <li>
                <a href="/">Baby Shoots</a>
              </li>
            </div>
            <div className=" text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5">
              <li>
                <a href="/"> Maternity Shoots</a>
              </li>
            </div>

            <div className=" text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5">
              <li>
                <a href="/"> Puberty Shoots</a>
              </li>
            </div>

            <div className=" text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5">
              <li>
                <a href="/">Corporate Shoots</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Services1;
