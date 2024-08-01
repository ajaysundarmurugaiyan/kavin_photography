import React, { Fragment } from "react";

const OurCollection = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbOsNPb25rClxQEL7d48XdJBzX3uDI028ZQ&s",
  ];

  return (
    <Fragment>
      <div className="">
        <div className=" relative p-10">
          {/* divider */}
          <div className="absolute inset-0 flex items-center">
            <div className="border border-slate-200 w-9/12 mx-auto"></div>
          </div>
          {/* text */}
          <div className="flex justify-center relative">
            <div className="font-display text-lg sm:text-3xl text-slate-500 bg-white px-3">
              Our Collections
            </div>
          </div>
        </div>
      </div>

      <div className="relative pt-10 px-4 pb-16 sm:px-10">
      <div className="overflow-hidden">
        <div className="flex animate-scroll">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default OurCollection;
