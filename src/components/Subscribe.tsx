import { element, ellipse } from "@/constants/import";
import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";
const Subscribe = () => {
  return (
    <div className="container relative">
      <Image
        alt="Element"
        src={element}
        className="absolute right-24 top-5 w-[100px] h-[100px] hidden lg:block"
      />
      <div className="bg-faintPrimary px-4 lg:px-16 py-20 rounded-md mb-20">
        <h1 className="text-primary font-semibold text-sm uppercase text-center">
          subscribe to our newsletter
        </h1>
        <h1 className="lg:text-4xl text-2xl font-medium lg:font-semibold my-10 text-center">
          Prepare yourself & let’s explore the beauty of the world
        </h1>
        {/* Text Input */}
        <div className="w-full lg:flex block justify-between items-center">
          <div className="lg:w-[80%] w-full relative my-4">
            <MdEmail className="absolute text-customBlack top-4 left-4" />
            <input
              type="email"
              className="w-full text-xs font-bold placeholder-customBlack py-4 px-10 rounded-2xl"
              placeholder="Your Email"
            />
          </div>
          <button className="lg:w-[15%] my-4 w-full  bg-primary flex justify-center items-center rounded-2xl py-4 text-xs font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
      <Image
        alt="Ellipse"
        src={ellipse}
        className="absolute right-0 bottom-0 hidden lg:block"
      />
    </div>
  );
};

export default Subscribe;
