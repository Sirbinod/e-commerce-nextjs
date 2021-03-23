import React from "react";
import Link from "next/link";
import Image from "next/image";
import {HiLocationMarker} from "react-icons/hi";
import {FiTruck} from "react-icons/fi";
import {BsPerson} from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
import {FiPhoneCall} from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full bg-red-600 h-26 pb-1 shadow-3xl">
      <div className="container mx-auto">
        {/* link nav bar / top small navbar */}

        <div className="flex justify-end pt-1 mr-1 lg:mb-2">
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <HiLocationMarker />
              <h4 className="pl-1 text-xs font-medium sm:font-semibold">
                Store Locator
              </h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <FiTruck />
              <h4 className="pl-1 text-xs font-medium sm:font-semibold">
                Store Locator
              </h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <BsPerson />
              <h4 className="pl-1 text-xs font-medium sm:font-semibold">
                Store Locator
              </h4>
            </a>
          </Link>
        </div>
        {/* Link bar end */}

        {/* logo and search bar with contact number */}

        <div className=" block lg:flex justify-between items-center lg:py-2">
          {/* logo */}
          <div className=" flex-grow w-28 h-8 mx-28 md:w-32 md:h-10 mb-1 lg:w-32 lg:h-10 relative">
            <Link href="/#  ">
              <Image
                className="hover:cursor-pointer"
                src="/logo.png"
                layout="fill"
                objectFit="fill"
                alt="web site logo"
              />
            </Link>
          </div>

          {/* search bar part */}
          <div className="flex space-x-3">
            <div className="flex-grow bg-white w-80 lg:w-99 flex items-center lg:rounded-full">
              <input
                className=" flex-grow  rounded-l-full w-72 h-7 px-2 lg:w-98.6 lg:h-7text-xs text-gray-700  focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              {/* search icon  */}
              <button class="mx-2 sm:bg-white 2xl:bg-gray-300 text-white rounded-full hover:bg-blue-400 focus:outline-none flex items-center ">
                <a className="text-gray-900">
                  <BiSearch />
                </a>
              </button>
            </div>

            {/* contact number */}
            <Link href="action2.2">
              <a className="flex text-white items-center text-xl hover:cursor-pointer ">
                <FiPhoneCall />
                <h4 className="pl-1 hidden text-base md:block font-semibold ">
                  0123456789
                </h4>
              </a>
            </Link>
          </div>
        </div>
        {/* end logo search bar */}
      </div>
    </div>
  );
};

export default Header;
