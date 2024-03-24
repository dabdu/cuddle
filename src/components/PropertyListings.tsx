"use client";

import React from "react";
import { useQuery } from "react-query";
import { NextPage } from "next";
import PulseLoader from "react-spinners/PulseLoader";
import PList from "./PList";
import { MdOutlineToggleOff } from "react-icons/md"; // Define the type for a property
import { BiSearch } from "react-icons/bi";
interface Property {
  data: any;
  next_page_url: undefined;
  path: string;
  per_page: number;
  prev_page_url: undefined;
  to: number;
  total: number;
}

const fetchProperties = async (): Promise<Property> => {
  const response = await fetch(
    "https://api-test.cuddlerealty.com/api/properties"
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const PropertyListings: NextPage = () => {
  const { data, isLoading } = useQuery<Property>("properties", fetchProperties);

  if (isLoading) {
    return (
      <PulseLoader
        className="container justify-center"
        color={"#552B94"}
        loading={true}
        size={14}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div className="container">
      {/* Heaing */}
      <div className="flex items-center flex-wrap">
        <h1 className="font-bold text-sm">List View</h1>
        {/* Toggle */}
        <div className="flex gap-1 items-center lg:px-8 px-1">
          <MdOutlineToggleOff size={30} color="gray" />
          <p className="text-xs text-black ">Map View</p>
        </div>
        {/* Sort */}
        <div className="bg-gray-50 py-2 px-2 rounded-md text-xs lg:mx-6 mx-1">
          sort by: <span className=" font-semibold text-black">Newest</span>
        </div>
        {/* Input Field */}
        <div className="lg:w-[300px] relative">
          <BiSearch className="absolute text-gray-400 top-2 left-2" />
          <input
            type="text"
            className="w-full text-xs placeholder-gray-400 py-2 px-6 rounded-lg border border-gray-400"
            placeholder="Search by location"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:justify-between justify-center">
        {data?.data?.data.map((property: any, index: any) => (
          <PList key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
