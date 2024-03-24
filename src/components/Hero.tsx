import { bg } from "@/constants/import";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative mb-10 pt-32 pb-20">
      <Image
        src={bg}
        alt="Hero Header"
        className="absolute top-0 left-0 -z-30 h-full"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-white font-semibold">
          Cuddle Investments
        </h1>
        <p className="w-full lg:w-[30%] mt-4 text-xs font-extralight text-center text-white">
          Our fractional ownership platform allows you to pool with others in
          order to buy a small bit of a big property and earn returns on
          appreciation of the property.
        </p>
      </div>
    </div>
  );
};

export default Hero;
