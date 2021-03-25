import React from "react";
import Head from "next/head";
import {GrCart} from "react-icons/gr";
import {GrFavorite} from "react-icons/gr";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import Link from "next/link";

const MegaMenu = () => {
  const menus = [
    {
      id: 1,
      name: "Home Appliances",
    },
    {
      id: 2,
      name: "Electric Devices",
    },
    {
      id: 3,
      name: "Cameras",
    },
    {
      id: 4,
      name: "Health & Beauty",
    },
    {
      id: 5,
      name: "Groceries",
    },
    {
      id: 6,
      name: "Watches",
    },
    {
      id: 7,
      name: "Woman's Fashion",
    },
    {
      id: 8,
      name: "Man's Fashion",
    },
    {
      id: 9,
      name: "Bags",
    },
    {
      id: 10,
      name: "Automobiles",
    },
    {
      id: 11,
      name: "Sports & Life style",
    },
    {
      id: 12,
      name: "Babies & Toys",
    },
  ];
  return (
    <div className="h-8  bg-gray-100 gap-100 ">
      <div className="container mx-auto items-center flex space-x-7 justify-between">
        {/* megamenu start */}
        <div className="group inline-block">
          {/* mega menu name  */}
          <button className="outline-none focus:outline-none py-0.5 rounded-sm space-x-10 flex items-center w-50">
            <h1 className="font-semibold pr-2 mr-6 text-base p-0.5">
              All Catagory
            </h1>

            <span className="">
              <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          {/* menu item  */}
          <ul className=" bg-white z-10 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-60">
            {menus.map((menu) => {
              return (
                <li
                  key={menu.id}
                  className="rounded-sm relative px-0.5 md:px-1 py-1.3 hover:bg-red-400"
                >
                  <button className="w-full text-left text-sm pl-2 font-semibold flex items-center outline-none focus:outline-none">
                    <span className="flex-1">{menu.name}</span>
                    <span className="mr-auto">
                      <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>

                  {/* submenu item  */}
                  <ul className="bg-white z-4 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-52 h-48 ">
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Kitchen</span>
                        <span className="mr-auto">
                          <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      {/* sub ko ni sub menu item  */}
                      <ul className="bg-white z-10 border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-52 h-40">
                        <Link href="/Selection">
                          <li className="px-3 py-1 hover:bg-gray-100">
                            <button className="items-center outline-none focus:outline-none">
                              Washing machine
                            </button>
                          </li>
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        {/* nab bar */}
        <div className="flex">
          <div className="hidden sm:flex sm:space-x-4 md:space-x-10 lg:space-x-16 items-center ">
            {/* nab bar items */}
            <a
              href="#"
              className="hover:cursor-pointer text-black text-sm sm:font-semibold"
            >
              Flash Sale
            </a>
            <a
              href="#"
              className="hover:cursor-pointer text-black text-sm sm:font-semibold"
            >
              Best Deal
            </a>
            <a
              href="#"
              className="hover:cursor-pointer text-black text-sm sm:font-semibold"
            >
              Colection
            </a>
            <a
              href="#"
              className="hover:cursor-pointer text-black text-sm sm:font-semibold"
            >
              Free Delivery
            </a>
          </div>
        </div>

        <div className="block sm:ml-6">
          <div className="flex  space-x-0 sm:space-x-4 items-center my-1 text-xl">
            {/* fav/like icon */}
            <h3 className="mx-4">
              <GrFavorite />
            </h3>
            <div className="flex items-center space-x-2 text-xl">
              {/* shopping cart icon  */}
              <h3>
                <GrCart />
              </h3>
              {/* totol mony display */}
              <h3 className="font-semibold text-sm">Rs. 20000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
