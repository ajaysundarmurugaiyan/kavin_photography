import React from "react";
import { Fragment } from "react";
import { img2 } from "../assets/images";

const Partners = () => {
  return (
    <Fragment>
      <div className="md:flex md:justify-around flex flex-col md:flex-row md:gap-5 justify-center items-center p-5">
        <a
          href="#"
          class="block w-full md:text-lg mt-10 text-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-white duration-500 hover:shadow-lg"
        >
          <div class="mb-2 text-lg md:text-2xl font-bold font-merriweather tracking-tight text-gray-900 dark:text-white flex justify-center">
            PROJECTS
          </div>
          <div className="flex justify-center text-fuchsia-700 text-lg md:text-2xl font-bold">
            150+
          </div>
          <div className="flex text-center md:text-lg text-sm">
            The photography business isn’t just about picking up a camera and
            taking stunning photos.
          </div>
        </a>
        <a
          href="#"
          class="block w-full md:text-lg mt-10 text-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-white duration-500 hover:shadow-lg"
        >
          <div class="mb-2 text-lg md:text-2xl font-bold font-merriweather tracking-tight text-gray-900 dark:text-white flex justify-center">
            AWARDS
          </div>
          <div className="flex justify-center text-fuchsia-700 text-lg md:text-2xl font-bold">
            100+
          </div>
          <div className="flex text-center md:text-lg text-sm">
            The photography business isn’t just about picking up a camera and
            taking stunning photos.
          </div>
        </a>
        <a
          href="#"
          class="block w-full p-6 md:text-lg mt-10 text-sm bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-white duration-500 hover:shadow-lg"
        >
          <div class="mb-2 text-lg md:text-2xl font-bold font-merriweather tracking-tight text-gray-900 dark:text-white flex justify-center">
            EXPERIENCE
          </div>
          <div className="flex justify-center text-fuchsia-700 text-lg md:text-2xl font-bold">
            5+ YEARS
          </div>
          <div className="flex text-center md:text-lg text-sm">
            The photography business isn’t just about picking up a camera and
            taking stunning photos.
          </div>
        </a>
      </div>
      <div className="md:text-3xl text-lg font-merriweather font-bold flex justify-center p-10">
        We Work With
      </div>
      <div className="flex flex-col justify-center text-wrap">

   
      <div className="md:flex flex-wrap md:justify-around pt-10 px-20">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7kbRzIMuqrdsQdq8qoeTFTGsymdySm21Hg&s"
            alt="img1"
            className="w-60 h-60 mt-5"
          />
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_kd9EI_uwJk3kcPxT7V5v0KhZovyBwKeGRUzcSmRydP2g=s900-c-k-c0x00ffffff-no-rj"
            alt="img2"
            className="w-48 h-48 mt-5 p-5"
          />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbn3gH6CZHMPbygS55YN2gVFYZWaJV-63Yg&s"
          alt="img3"
          className="w-60 h-60 mt-5"
        />
      </div>
      <div className="md:flex flex-wrap md:justify-around px-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOGV5enizMSrMBhl6wukVMdmLHKyIKOGROA&s"
          alt="img4"
          className="w-60 h-60 mt-5"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkG-jtQyQfzrvd-0XpY-nATNbs7AvTrHT21A&s"
          alt="img5"
          className="w-60 h-60 mt-5"
        />
      </div>
      </div>
    </Fragment>
  );
};

export default Partners;

<div className="pt-5">
  <div className="relative p-4 sm:p-10">
    {/* divider */}
    <div className="absolute inset-0 flex items-center">
      <div className="border border-slate-200 w-10/12 sm:w-9/12 mx-auto"></div>
    </div>
    {/* text */}
    <div className="flex justify-center relative">
      <div className="font-display text-lg sm:text-3xl text-slate-500 bg-white px-4 sm:px-6 py-2 sm:py-4">
        Partners
      </div>
    </div>
  </div>
</div>;
