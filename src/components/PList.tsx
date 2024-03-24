import Image from "next/image";
import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { RiAlarmFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import ProgressBar from "./generic/ProgressBar";
import { FaRegHeart } from "react-icons/fa";
const PList = ({ property }: any) => {
  const {
    thumbnail,
    name,
    country,
    roi_days,
    total_no_of_units,
    no_investment,
    no_units,
  } = property;

  const temp = no_units === 0 ? 200 : no_units;
  return (
    <div className="w-[300px] rounded-2xl shadow-xl my-5 mx-2">
      {/* Image Container */}
      <div className="relative">
        {/* Land */}
        <div className="absolute left-8 top-5 bg-white uppercase px-2 font-medium py-1 shadow-lg rounded-sm text-primary text-xs">
          land
        </div>
        {/* Image */}
        <Image
          src={thumbnail}
          className="w-full rounded-2xl h-[200px]"
          alt={"Property"}
          width={300}
          height={200}
          objectFit="cover"
        />
        {/* Icon */}
        <FaRegHeart
          size={20}
          color="white"
          className="absolute right-5 bottom-5 z-50"
        />
        {/* Purple Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-purple-900 to-transparent opacity-75 rounded-2xl" />
      </div>
      <div></div>
      {/* Desc */}
      <div className="p-6">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          {/* Col One */}
          <div className="w-[50%]">
            {/* Property Name */}
            <h1 className="text-sm font-semibold">{name}</h1>
            {/* Country */}
            <div className="flex items-center gap-1 mt-1">
              {/* ICon */}
              <SiGooglemaps className="text-primary" size={15} />
              {/* COuntry Name */}
              <p className="text-xs text-black">{country?.name}</p>
            </div>
          </div>
          {/* COl Two */}
          <div className="w-[40%]">
            {/* Row One */}
            <div className="flex items-center gap-2">
              {/* ICon */}
              <RiAlarmFill size={30} className="text-primary" />
              {/* Desc */}
              <div className="">
                <h1 className="text-sm font-semibold leading-3">
                  {roi_days}{" "}
                  <span className="text-[10px] font-medium">days</span>
                </h1>
                <p className="text-[8px] leading-3">left to invest</p>
              </div>
            </div>
            {/* Row Two */}
            <div className="flex items-center gap-2">
              {/* ICon */}
              <HiUsers size={30} className="text-primary" />
              {/* Desc */}
              <div className="">
                <h1 className="text-sm font-semibold leading-3">
                  {total_no_of_units}
                </h1>
                <p className="text-[10px] leading-3">investors</p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="w-full flex justify-between items-end mt-6">
          {/* Col One */}
          <div className="w-[50%]">
            <h1 className="text-md font-medium">
              Total Raise:{" "}
              <span className="font-bold text-lg">{no_investment}</span>
            </h1>
            <p className="text-[10px] text-black">
              {((no_investment / temp) * 100).toFixed(0)} raised of total raise
            </p>
            <ProgressBar
              total={parseInt(temp)}
              completed={parseInt(no_investment)}
            />
          </div>
          {/* COl Two */}
          <div className="w-[40%]">
            <button className="bg-primary text-white rounded-md text-xs font-medium w-full text-center py-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PList;
