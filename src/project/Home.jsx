import React from "react";
import {img2, img5} from "../assets/images";

const Home = () => {
  return (
    <div className="flex mt-36">
      <div className="flex items-center justify-center h-full  flex-col font-merriweather max-w-4xl text-center">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-arial  leading-tight px-4">
          READY TO SMILE
        </h1>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 md:px-10 lg:px-20 mt-4 md:mt-8 lg:mt-12">
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
          className="border-2 border-black py-2 px-4 mt-6 md:mt-10 lg:mt-12 text-sm md:text-base lg:text-lg rounded-lg text-black hover:border-orange-400 hover:bg-orange-500 hover:text-white duration-500"
        >
          Get Started
        </button>
      </div>
      <div className="">
        <img src={img5} alt="img2"
        
        />

      </div>
  </div>
  );
};

export default Home;
