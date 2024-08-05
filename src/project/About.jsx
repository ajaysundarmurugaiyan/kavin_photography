import React from "react";
import { Fragment } from "react";
import { img2 } from "../assets/images";

const About = () => {
  return (
    <Fragment>
      <div className="pt-5">
        <div className="relative p-4 sm:p-10">
          {/* divider */}
          <div className="absolute inset-0 flex items-center">
            <div className="border border-slate-200 w-10/12 sm:w-9/12 mx-auto"></div>
          </div>
          {/* text */}
          <div className="flex justify-center relative">
            <div className="font-display text-lg sm:text-3xl text-slate-500 bg-white px-4 sm:px-6 py-2 sm:py-4">
              About Us
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center lg:justify-evenly text-white text-xs md:text-lg font-merriweather p-5">
        <div>
            <div className="flex text-justify md:text-lg sm:text-xs text-black p-5 max-w-2xl">
              I am Kavin Bharadhi, the owner of STUDIO MC2 based in Coimbatore.
              My team and I have been working since 2019 and have covered 80
              weddings till now. Photographs take you down the world of fond
              memories and therefore they should be impeccable in totality. For
              this, you have to pick a decent photography organization to shoot
              your matrimonial functions in a remarkable way. In case you are
              searching for one such vendor, STUDIO MC2 is the decision that you
              should make. Your pursuit of a perfect photographer can end here
              as STUDIO MC2 is here to convert your cinematic desires and dreams
              into reality and to capture each and every one of your matrimonial
              functions in the manner in which you've imagined. We let you be
              yourself and capture your precious moments with a lot of
              enthusiasm and gusto.
            </div>
        </div>
        <div className="md:h-auto md:w-auto my-5 p-5 flex justify-center items-center">
          <img
            src="https://st3.depositphotos.com/1037987/32628/i/450/depositphotos_326287128-stock-photo-flat-lay-shot-techno-items.jpg"
            alt="image3"
          />
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default About;
