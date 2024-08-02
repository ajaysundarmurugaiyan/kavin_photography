import React, { Fragment, useState, useEffect } from "react";
import { img4 } from "../assets/images";
import WeddingPhotos from "./OurServices/WeddingPhotos";

const Services1 = () => {
  const services = [
    "Wedding Photography",
    "Pre & Post Wedding",
    "Baby Shoots",
    "Maternity Shoots",
    "Puberty Shoots",
    "Corporate Shoots",
  ];

  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, services[highlightIndex].length * 100 + 500);

    return () => clearInterval(intervalId);
  }, [highlightIndex]);

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
          <div className="text-orange-500 font-merriweather md:text-5xl text-xl flex justify-center sm:justify-start">
            Our Services
          </div>

          <ul className="text-white mt-10 flex flex-col justify-center items-center sm:justify-start sm:items-start">
            {services.map((service, serviceIndex) => (
              <li
                key={serviceIndex}
                className="text-sm md:text-3xl font-merriweather px-10 md:mt-10 mt-5"
              >
                <a href="/" onClick={(e) => e.preventDefault()} className="flex">
                  {service.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`transition-colors ${
                        highlightIndex === serviceIndex
                          ? `inline-block animate-fillColor`
                          : ""
                      }`}
                      style={{
                        animationDelay: `${letterIndex * 100}ms`,
                        color:
                          highlightIndex === serviceIndex ? "#f97316" : "",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Services1;
