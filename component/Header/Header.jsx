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
    <div className="w-full bg-red-600 h-26 shadow-3xl sticky z-99 top-0">
      <div className="container mx-auto ">
        <div className="flex justify-end pt-1">
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <HiLocationMarker />
              <h4 className="pl-1">Store Locator</h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <FiTruck />
              <h4 className="pl-1">Store Locator</h4>
            </a>
          </Link>
          <Link href="action1.1">
            <a className="flex text-white ml-3 al items-center text-sm">
              <BsPerson />
              <h4 className="pl-1">Store Locator</h4>
            </a>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-30 h-13">
            <Image
              src="/logo.svg"
              width="200"
              height="70"
              alt="web site logo"
            />
          </div>
          <div className="bg-white  flex items-center rounded-full ">
            <input
              className="rounded-l-full widthSearch h-10 py-4 px-6 pr-2 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />

            <button class="bg-gray-300 text-white rounded-full p-2 mr-1 hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
              <a className="text-gray-900">
                <BiSearch />
              </a>
            </button>
          </div>
          <Link href="action2.2">
            <a className="flex text-white ml-3 al items-center text-3xl">
              <FiPhoneCall />
              <h4 className="pl-2">0123456789</h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
