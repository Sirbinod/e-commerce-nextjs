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
    <div className="w-full bg-red-555 h-26 pb-1 shadow-3xl">
      <div className="container mx-auto">
        {/* link nav bar / top small navbar */}

        <div className="flex justify-end pt-1 mr-1">
          <Link href="action1.1">
            <a className="flex text-white-100 ml-3 al items-center text-sm">
              <HiLocationMarker />
              <h4 className="pl-1 text-xs font-normal font-sans">
                Store Locator
              </h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white-100 ml-3 al items-center text-sm ">
              <FiTruck />
              <h4 className="pl-1 text-xs font-normal font-sans">
                Store Locator
              </h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white-100 ml-3 al items-center text-sm">
              <BsPerson />
              <h4 className="pl-1 text-xs font-normal font-sans">
                Store Locator
              </h4>
            </a>
          </Link>
        </div>
        {/* Link bar end */}

        {/* logo and search bar with contact number */}

        <div className=" flex justify-between md:space-x-32 xlspace-x-40 items-center pt-2 py-2">
          {/* logo */}
          <div className=" w-20 h-7 xl:w-48 xl:h-12 relative">
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

          <div className="flex-grow bg-white-100  xl:w-99 flex items-center rounded-full">
            <input
              className=" flex-grow text-base rounded-l-full mx-3 px-1 xl:w-98.6 xl:h-9 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />
            {/* search icon  */}
            <button className=" w-7 h-7 p-2 mr-1.5 xl:bg-gray-300 text-white rounded-full hover:bg-blue-400 focus:outline-none flex items-center ">
              <a className="text-gray-900">
                <BiSearch />
              </a>
            </button>
          </div>

          {/* contact number */}
          <Link href="action2.2">
            <a className="flex text-white-100 items-center text-2xl hover:cursor-pointer ">
              <FiPhoneCall />
              <h4 className="pl-2 text-base font-semibold font-sans">
                0123456789
              </h4>
            </a>
          </Link>
        </div>
      </div>
      {/* end logo search bar */}
    </div>
  );
};

export default Header;
