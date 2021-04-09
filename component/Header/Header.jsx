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
    <div className="header   pb-1">
      <div className="container mx-auto">
        {/* link nav bar / top small navbar */}

        <div className="link-bar lg:mb-0">
          <Link href="action1.1">
            <a className=" link-bar-item">
              <HiLocationMarker />
              <h1 className="pl-1">Store Locator</h1>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="link-bar-item">
              <FiTruck />
              <h1 className="pl-1">Track Order</h1>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="link-bar-item">
              <BsPerson />
              <h1 className="pl-1">Login & Register</h1>
            </a>
          </Link>
        </div>
        {/* Link bar end */}

        {/* logo and search bar with contact number */}

        <div className="menu-bar lg:space-x-20 xl:space-x-32 lg:pb-2 ">
          {/* logo */}
          <div className="hidden lg:block mb-3  cursor-pointer">
            <Link href="/#  ">
              <img className="hover:cursor-pointer logo" src="/logo.png" />
            </Link>
          </div>

          {/* search bar part */}

          <div className="flex-grow bg-white h-14 lg:h-10 flex items-center lg:rounded-full">
            <input
              className=" flex-grow text-lg mr-3 lg:text-base rounded-l-full h-12  px-4 xl:w-98.6 lg:h-9 focus:outline-none"
              id="search"
              type="text"
              placeholder="Search for product"
            />
            {/* search icon  */}
            <button className=" w-8 h-8 p-2 lg:mr-1 lg:bg-gray-300 lg:text-white rounded-full hover:bg-blue-400 focus:outline-none flex items-center ">
              <a className="text-2xl lg:text-base">
                <BiSearch />
              </a>
            </button>
          </div>

          {/* contact number */}
          <Link href="action2.2">
            <a className="hidden lg:flex text-white items-center hover:cursor-pointer ">
              <FiPhoneCall style={{width: "30px", height: "30px"}} />
              <h4 className="pl-2 number">0123456789</h4>
            </a>
          </Link>
        </div>
      </div>
      {/* end logo search bar */}
    </div>
  );
};

export default Header;
