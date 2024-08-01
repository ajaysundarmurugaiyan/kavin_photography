import React, { Fragment } from "react";
import { img6 } from "../assets/images";

const ContactPage = () => {
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
              Contact
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://example.com/recording-screen.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with content */}
        <div className="relative w-full h-full flex flex-col md:flex-row justify-center items-center p-4 md:p-10 bg-opacity-100">
          {/* Left side with shop image */}
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <img
              src={img6}
              alt="Shop"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right side with Google Maps and contact info */}
          <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4 justify-center items-center">
            {/* Google Maps */}
            <div className="w-full h-64 md:h-96">
              <iframe
                className="w-full h-full rounded-lg shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.068498041622!2d-122.41941508468162!3d37.774929279759746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c9e4bfb%3A0x9c4e4d2b5e8dd2f4!2sShop%20Location!5e0!3m2!1sen!2sus!4v1615403701208!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="w-full p-4 text-black flex flex-col flex-wrap">
              <p className="text-black md:text-xl md:w-2/4 text-sm font-merriweather">
                329/2, near SEZ IT Park, Saravanampatti, Coimbatore, Tamil Nadu
                641035
              </p>
              <p className="text-black font-merriweather pt-5 text-sm md:text-lg">
                <strong>PHONE</strong>
                <div className="pt-3 font-merriweather md:text-xl">(+91)95148 11539</div>
              </p>
              <p className="text-black font-merriweather pt-5 md:text-xl">
                <strong>Email</strong>
                <div className="pt-3 font-merriweather text-sm md:text-lg">
                studiomc2cbe@gmail.com</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
