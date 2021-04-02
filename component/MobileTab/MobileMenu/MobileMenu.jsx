import React from "react";
import Image from "next/image";
import {CgMenuGridR} from "react-icons/cg";
import {HiMenu} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
const MobileMenu = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="my-2 w-20 text-center border border-green-555">
        <div className="w-6 h-7 sm:w-8 sm:h-10 mx-7 sm:mx-6 border border-red-555 relative">
          <Image
            src="/mobilelogo.png"
            layout="fill"
            objectFit="fill"
            alt="mobile logo"
          />
        </div>
        <h2 className="text-sm font-bold my-1">Home</h2>
      </div>

      <div className="my-2 w-20 text-center border border-green-555">
        <div className="text-3xl sm:text-4xl  mx-6 text-center  border border-red-555 relative">
          <CgMenuGridR />
        </div>
        <h2 className="text-sm font-bold my-1">Category</h2>
      </div>
      <div className="my-2  w-20 text-center border border-green-555">
        <div className="text-3xl sm:text-4xl mx-6 border border-red-555 relative">
          <HiMenu />
        </div>
        <h2 className="text-sm font-bold my-1">Menu</h2>
      </div>
      <div className="my-2 w-20 text-center border border-green-555">
        <div className="text-3xl sm:text-4xl mx-6 border border-red-555 relative">
          <FiPhoneCall />
        </div>
        <h2 className="text-sm font-bold my-1">98000000</h2>
      </div>
    </div>
  );
};

export default MobileMenu;
