import React, {useState, useEffect} from "react";
import Head from "next/head";
import {GrCart} from "react-icons/gr";
import {MdFavoriteBorder} from "react-icons/md";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

const MegaMenu = () => {
  const [hoverColor, setHoverColor] = useState("");
  const router = useRouter();
  const handleScroll = () => {
    const selector = document.querySelector(".home .custom-menu");

    if (window.scrollY > 320) {
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
    <div className="h-12">
      <div className="container mx-auto py-1.5  items-center flex space-x-7 justify-between">
        {/* megamenu start */}
        <div className="hidden group lg:inline-block">
          <button className="outline-none focus:outline-none py-2 xl:py-1  bg-white rounded-sm flex items-center">
            <img src="/categorylogo.png" width="16" height="14" />
            <span className="pr-1 main-menu flex-1 ml-2 mr-20 ">
              All Category
            </span>
            <span>
              <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className={
              router.pathname == "/"
                ? "home mt-2 custom-menu bg-white border rounded-sm  group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-56"
                : "bg-white mt-2 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-56"
            }
          >
            {menus.map((menu, index) => {
              return (
                <li
                  key={menu.id}
                  className={
                    "rounded-sm relative px-3 " + " hover:bg-gray-300 "
                  } //hover:bg-gray-300 hover:text-red-600
                >
                  <button
                    onMouseEnter={() => {
                      setHoverColor(index);
                    }}
                    onMouseOut={() => {
                      setHoverColor(-100000);
                    }}
                    className="w-full drop-menu  text-left  flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1 ">{menu.name}</span>
                    <span className="mr-auto">
                      <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out text-gray-400">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-56 h-40">
                    <li className="rounded-sm relative px-3  hover:bg-gray-300  ">
                      <button className="w-full text-left drop-menu hover:text-red-500 flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">Laptop</span>
                        <span className="mr-auto">
                          <svg className="fill-current h-4 w-4 transition duration-150 ease-in-out">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </button>
                      <ul className="bg-white  rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-56">
                        <Link href="/Selection">
                          <li className="drop-menu relative px-3 py-1 hover:bg-gray-300 hover:text-red-500 cursor-pointer">
                            <a className="mx-3">IPhone</a>
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

        <div className="block sm:ml-6 ">
          <div className="flex  space-x-0 sm:space-x-4 items-center my-1 text-xl">
            {/* fav/like icon */}
            <h3 className="mx-3 cursor-pointer">
              <img
                src="/Fav.png"
                alt="fav-icon"
                style={{maxHeight: "70%", maxWidth: "70%"}}
              />
            </h3>
            <div className="flex items-center space-x-3">
              {/* shopping cart icon  */}
              <h3 className="cursor-pointer">
                <img
                  src="/ShoppingCart.png"
                  alt="fav-icon"
                  style={{maxHeight: "70%", maxWidth: "70%"}}
                />
              </h3>
              {/* totol mony display */}
              <h3 className="main-menu cursor-pointer">Rs. 20000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
