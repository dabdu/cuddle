import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/constants/import";
import { menu_items } from "@/constants/data";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                width={100}
                alt="Cuddle"
                className="object-contain block xl:mr-8"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-16">
              {menu_items.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item}`}
                  className="block text-xs text-black font-medium capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href={`/sign-in`}
                className="block text-xs text-black font-medium capitalize"
              >
                {"sign in"}
              </Link>
              <button className="bg-primary ml-4 text-white px-5 py-3 rounded-md text-xs font-medium">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <HiOutlineMenuAlt1
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } text-customBlack hover:text-white`}
                size={30}
              />
              {/* Close Icon */}
              <LiaTimesSolid
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } text-customBlack hover:text-white `}
                size={30}
              />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menu_items.map((item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                className="block py-3 text-xs text-black font-medium capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
