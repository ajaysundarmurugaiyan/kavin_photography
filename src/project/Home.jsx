import React from "react";
import { img5 } from "../assets/images";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-12 pt-20 md:pt-0 md:mt-36">
      <div className="flex items-center justify-center flex-col font-merriweather max-w-4xl text-center w-full md:w-2/3">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arial leading-tight px-4">
          READY TO SMILE
        </h1>
        <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-4 md:px-10 lg:px-20 mt-4 md:mt-8 lg:mt-12">
          The photography business isn’t just about picking up a camera and
          taking stunning photos. It’s hard work that also involves planning
          strategies that will help you take your business to the next level.
          And sometimes, it can also get stressful, especially during tough
          times like the coronavirus pandemic. However, as a wedding
          photographer, you can do so many things to stay inspired and motivated
          – learning new techniques, exploring other photographers’ work,
          reading inspirational stories – the list is endless. If you feel
          uninspired or are going through a tough time, then this blog might
          just help to lift your spirits.
        </p>
        <button
          type="button"
          className="border-2 border-black py-2 px-4 mt-6 md:mt-10 lg:mt-12 text-xs sm:text-sm md:text-base lg:text-lg rounded-lg text-black hover:border-orange-400 hover:bg-orange-500 hover:text-white duration-500"
        >
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0 hidden md:block">
        <img src={img5} alt="Photography" className="w-full h-auto"/>
      </div>
    </div>
  );
};

export default Home;
