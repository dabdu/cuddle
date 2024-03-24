"use client";

import { HeroImg, bottomFlip } from "@/constants/import";
import Image from "next/image";
import { Button } from "./generic";
const About = () => {
  return (
    <div className="w-full z-50 lg:flex block justify-between items-center lg:mt-10 py-10">
      <div className="lg:w-[50%] w-full lg:px-4 pl-4 lg:pl-32">
        {/* Description */}
        <div className="">
          <h1 className=" text-primary lg:text-2xl text-lg font-bold mb-3">
            Rental Asset Investment:
          </h1>
          <h1 className=" text-black tg:text-2xl text-lg font-bold">
            Unlock Passive Income
          </h1>
          <h1 className=" text-black tg:text-2xl text-lg font-bold">
            Potential{" "}
          </h1>
        </div>

        {/* Content */}
        <p className="text-xs lg:leading-8 leading-4 text-customBlack py-5">
          Welcome to the Rental Asset Investment category, a pathway to
          harnessing the power of real estate for passive income generation.
          Invest in income-producing properties that offer both financial
          stability and the potential for long-term wealth accumulation. Here is
          why Rental Asset Investment is a compelling choice for your investment
          strategy. Explore Properties
        </p>
        {/* Button */}
        <div className="mt-4 mb-10">
          <Button text="Explore Properties" />
        </div>
      </div>
      <div className="lg:w-[40%] w-full z-50 relative">
        <Image src={HeroImg} alt="hero" className="w-full h-full" />
        {/* Left */}
        <Image
          src={bottomFlip}
          alt="Bottom Flip"
          className="absolute lg:right-[300px] right-[80px] -bottom-[50px] lg:-bottom-[60px] h-[140px] w-[100px] -z-50"
        />
      </div>
    </div>
  );
};

export default About;
