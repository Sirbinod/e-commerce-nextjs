import React from "react";
import Head from "next/head";
import {FaShoppingCart} from "react-icons/fa";
import {FcLike} from "react-icons/fc";
import Link from "next/link";

const MegaMenu = () => {
  return (
    <div className="h-10 bg-gray-100 gap-100 sticky z-50">
      <div className="container mx-auto items-center flex space-x-7 justify-between">
        <div class="group inline-block ">
          <button class="outline-none focus:outline-none px-3 py-1  rounded-sm flex items-center w-50">
            <span class="pr-1 font-semibold flex-1">All Catagory</span>
            <span>
              <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul class="bg-white z-10 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-60">
            <li class="rounded-sm relative px-3 py-1 hover:bg-red-400">
              <button class="w-full text-left flex items-center outline-none focus:outline-none">
                <span class="pr-1 flex-1">Electric Device</span>
                <span class="mr-auto">
                  <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul class="bg-white z-10 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-52">
                <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button class="w-full text-left flex items-center outline-none focus:outline-none">
                    <span class="pr-1 flex-1">Kitchen</span>
                    <span class="mr-auto">
                      <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul class="bg-white z-10 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-40">
                    <Link href="/Selection">
                      <li class="px-3 py-1 hover:bg-gray-100">
                        <button className="items-center outline-none focus:outline-none">
                          Washing machine
                        </button>
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-20 items-center">
            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white  rounded-md text-sm font-medium"
            >
              Flash Sale
            </a>
            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white  rounded-md text-sm font-medium"
            >
              Best Deal
            </a>
            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white   rounded-md text-sm font-medium"
            >
              Colection
            </a>
            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white  rounded-md text-sm font-medium"
            >
              Free Delivery
            </a>
          </div>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-5 items-center">
            <h3>
              <FaShoppingCart />
            </h3>
            <h3>
              <FcLike />
            </h3>
            <h3>Rs. 200</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
