import { leftFlip, rightFlip } from "@/constants/import";
import Image from "next/image";
import React, { useState } from "react";

const HorizontalMenuItems = () => {
  const [active, setActive] = useState("rental projects");
  const menu = [
    "asset flip",
    "land banking",
    "construction",
    "rental projects",
  ];
  return (
    <div className=" container flex justify-center items-center relative">
      {/* Left */}
      <Image
        src={leftFlip}
        alt="Left Flip"
        className="absolute left-[230px] -top-[90px] h-[140px] w-[100px] hidden lg:block -z-50"
      />
      {/* Left */}
      <Image
        src={rightFlip}
        alt="Right Flip"
        className="absolute right-[230px] -top-[70px] h-[140px] w-[100px] hidden lg:block -z-40"
      />
      <div className="lg:w-[70%] w-full flex justify-between items-center">
        {menu.map((item, index) => (
          <p
            onClick={() => setActive(item)}
            className={`${
              item === active ? "bg-faintPrimary" : ""
            } cursor-pointer z-50 text-[9px] lg:text-xs font-medium text-black capitalize rounded-md px-[6px] lg:px-5 py-3`}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HorizontalMenuItems;
