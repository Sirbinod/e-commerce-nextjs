import React from "react";
import Image from "next/image";
import {CgMenuGridR} from "react-icons/cg";
import {HiMenu} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
const MobileMenu = () => {
  return (
    <div className="flex justify-around items-center bg-red-600">
      <div className="my-2 w-20 text-center ">
        <div className="w-6 h-7 sm:w-8 sm:h-10 mx-7 sm:mx-6 relative">
          <Image
            src="/mobilelogo.png"
            layout="fill"
            objectFit="fill"
            alt="mobile logo"
          />
        </div>
        <h2 className="text-sm font-bold my-1 text-white">Home</h2>
      </div>
      <div>
        <button className=" my-2 w-20 text-center text-white outline-none focus:outline-none">
          <div className="text-3xl sm:text-4xl  mx-6 text-center   relative">
            <CgMenuGridR />
          </div>
          <h2 className="text-sm font-bold my-1">Category</h2>
        </button>
        <div>
          <input type="checkbox" name="" id="check" />
          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <a href="#">Menu</a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <a href="#">Link 3</a>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <a href="#">Link 1</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2  w-20 text-white text-center ">
        <div className="text-3xl sm:text-4xl mx-6 relative">
          <HiMenu />
        </div>
        <h2 className="text-sm font-bold my-1">Menu</h2>
      </div>
      <div className="my-2 w-20 text-white text-center ">
        <div className="text-3xl sm:text-4xl mx-6 relative">
          <FiPhoneCall />
        </div>
        <h2 className="text-sm font-bold my-1">98000000</h2>
      </div>
    </div>
  );
};

export default MobileMenu;
