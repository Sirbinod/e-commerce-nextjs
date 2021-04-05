import React, {useEffect} from "react";
import Head from "next/head";
import {GrCart} from "react-icons/gr";
import {MdFavoriteBorder} from "react-icons/md";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

const MegaMenu = () => {
  const router = useRouter();
  const handleScroll = () => {
    const selector = document.querySelector(".home .custom-menu");

    if (window.scrollY > 25) {
      selector && selector.classList
        ? selector.classList.add("transform", "scale-0")
        : null;
    } else {
      selector && selector.classList
        ? selector.classList.remove("transform", "scale-0")
        : null;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
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
    <div className="h-10">
      <div className="container mx-auto py-1.5 items-center flex space-x-7 justify-between">
        {/* megamenu start */}
        <div className="hidden lg:group lg:inline-block">
          {/* mega menu name  */}
          <button className="outline-none focus:outline-none py-0.5 rounded-sm flex items-center w-50">
            <img src="/categorylogo.png" width="16" height="14" />
            <h1 className="main-menu pr-2 ml-2 mr-18  xl:p-0.5">
              All Categories
            </h1>

            <span className="text-xs font-normal">
              <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          {/* menu item  */}
          <ul
            className={
              router.pathname == "/"
                ? "home custom-menu bg-white  md:mt-3 xl:mt-1  z-10 rounded-sm group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-56 "
                : "custom-menu transform scale-0 bg-white md:mt-3 xl:mt-1 z-10  max-h-100 rounded-sm group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-56"
            }
          >
            {menus.map((menu) => {
              return (
                <li
                  key={menu.id}
                  className="rounded-sm relative px-0.5 md:px-1 "
                >
                  <button className=" drop-menu text-left pl-2 my-0.5 xl:my-2 2xl:my-3  outline-none focus:outline-none">
                    <span className=" flex-1">{menu.name}</span>
                    <span className="mr-auto">
                      <svg className=" fill-current h-4 w-4  text-gray-500 transition duration-150 ease-in-out">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>

                  {/* submenu item  */}
                  <ul className=" transform scale-0 bg-white z-4 rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-52 h-48 ">
                    <li className="rounded-sm relative px-3 py-1">
                      <button className="  drop-menu text-left outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Kitchen</span>
                        <span className="mr-auto">
                          <svg className="fill-current h-4 w-4 text-gray-500 transition duration-150 ease-in-out">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      {/* sub ko ni sub menu item  */}
                      <ul className="bg-white z-10 rounded-sm  absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-52 h-40">
                        <Link href="/Selection">
                          <li className="px-3 py-1 hover:bg-gray-100">
                            <button className="drop-menu outline-none focus:outline-none">
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
          <div className="hidden lg:flex sm:space-x-4 md:space-x-10 lg:space-x-16 items-center ">
            {/* nab bar items */}
            <a href="#" className="hover:cursor-pointer main-menu">
              Flash Sale
            </a>
            <a href="#" className="hover:cursor-pointer main-menu">
              Best Deal
            </a>
            <a href="#" className="hover:cursor-pointer main-menu">
              Colection
            </a>
            <a href="#" className="hover:cursor-pointer main-menu">
              Free Delivery
            </a>
          </div>
        </div>

        <div className="block sm:ml-6">
          <div className="flex  space-x-0 sm:space-x-4 items-center my-1 text-xl">
            {/* fav/like icon */}
            <h3 className="mx-3">
              <MdFavoriteBorder style={{width: "22px", height: "22  px"}} />
            </h3>
            <div className="flex items-center space-x-3">
              {/* shopping cart icon  */}
              <h3>
                <GrCart style={{width: "20px", height: "20px"}} />
              </h3>
              {/* totol mony display */}
              <h3 className="main-menu  ">Rs. 20000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
