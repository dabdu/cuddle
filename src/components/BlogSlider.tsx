import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { blogs } from "@/constants/data";
import Image from "next/image";
import { logoed } from "@/constants/import";
import { Button } from "./generic";
const BlogSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container relative">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        {/* Heading */}
        <h1 className="lg:text-2xl text-lg font-medium lg:font-semibold text-black">
          News and Updates
        </h1>
        {/* SLider Btn */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrev}
            className=" flex justify-center shadow-md items-center lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] bg-white border rounded-full border-gray-300"
          >
            <GrFormPreviousLink color="black" size={20} />
          </button>
          <button
            className="flex justify-center items-center shadow-lg lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] bg-primary border rounded-full border-gray-300"
            onClick={goToNext}
          >
            <GrFormNextLink color="white" />
          </button>
        </div>
      </div>
      <Slider className="py-10" {...settings} ref={sliderRef}>
        {blogs.map((item, index) => (
          <div key={index} className="w-[250px] p-5">
            <div className="w-full bg-white rounded-lg shadow-lg">
              <Image src={item.image} alt="Blog" className="w-full" />
              <div className="w-full p-4">
                {/* Author and Date */}
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-[40px] w-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                      <Image
                        src={logoed}
                        height={25}
                        width={25}
                        objectFit="contain"
                        alt="Author"
                      />
                    </div>
                    <h1 className="text-lg text-black ml-2">Admin</h1>
                  </div>
                  <p className="text-sm text-customBlack">
                    {"Jan 20 . 10:00AM"}
                  </p>
                </div>
                {/* title */}
                <h1 className="font-medium text-xs text-primary mt-4 mb-2">
                  {item.title}
                </h1>
                {/* content */}
                <p className="text-xs text-black">{item.desc}</p>
                <p className="cursor-pointer font-semibold text-xs text-primary mt-2">
                  Read more
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center items-center">
        <Button text="View More" />
      </div>
    </div>
  );
};

export default BlogSlider;
