import React from "react";
import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {RiDeleteBin5Line} from "react-icons/ri";

import Link from "next/link";

const MyCard = () => {
  return (
    <div>
      <div className=" bg-white rounded">
        <div className="flex justify-between mx-3 py-1 border-b items-center">
          <div className="flex items-center space-x-4  py-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <h3 className="select-item"> Select Item to delete</h3>
          </div>
          <button className="w-16 h-6 pt-0.5 md:w-20 md:h-7 text-center border border-red-500 text-xs md:text-sm font-semibold text-red-500  rounded-3xl focus:outline-none hover:bg-red-500 hover:text-white">
            Delete
          </button>
        </div>
        <div className="my-5 border-b mx-3 pb-3 flex">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
          />
          <div className="flex">
            <div className="mx-5 w-40 h-32 relative">
              <Image
                src="/selec2.png"
                layout="fill"
                objectFit="fill"
                quality="100"
              />
            </div>
            <div className="mr-10">
              <h1 className="select-item-tit">
                Laptop 10.1 Inch Windows 10 Tablet 2-in-1 Mini Laptop 4G RAM
                Gamer With Detachable Keyboard Laptop
              </h1>
              <div className="flex space-x-10 items-center my-3">
                <h2 className="select-item-price">Rs. 15000</h2>
                <h3 className="text-gray-400 line-through text-base font-medium">
                  Rs. 20000
                </h3>
                <h3 className="select-item-dis rounded-2xl text-center py-1">
                  25% off
                </h3>
                <h3 className="text-base font-medium text-gray-400">
                  Sold by Golden Store
                </h3>
              </div>
              <div className="flex space-x-5 my-3    items-center">
                <div className="flex">
                  <button className="w-5 h-5 border border-gray-100 bg-gray-200">
                    -
                  </button>
                  <h2 className="w-5 h-5 text-sm font-semibold px-1 border border-gray-200">
                    1
                  </h2>
                  <button className="w-5 h-5 border border-gray-200 bg-gray-100 text-sm">
                    +
                  </button>
                </div>
                <div>
                  <FcLike />
                </div>
                <div>
                  <RiDeleteBin5Line />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 border-b mx-3 pb-3 flex">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
          />
          <div className="flex">
            <div className="mx-5 w-40 h-32 relative">
              <Image
                src="/selec4.png"
                layout="fill"
                objectFit="fill"
                quality="100"
              />
            </div>
            <div className="mr-10">
              <h1 className="select-item-tit">
                Laptop 10.1 Inch Windows 10 Tablet 2-in-1 Mini Laptop 4G RAM
                Gamer With Detachable Keyboard Laptop
              </h1>
              <div className="flex space-x-10 items-center my-3">
                <h2 className="select-item-price">Rs. 15000</h2>
                <h3 className="text-gray-400 line-through text-base font-medium">
                  Rs. 20000
                </h3>
                <h3 className="select-item-dis rounded-2xl text-center py-1">
                  25% off
                </h3>
                <h3 className="text-base font-medium text-gray-400">
                  Sold by Golden Store
                </h3>
              </div>
              <div className="flex space-x-5 my-3    items-center">
                <div className="flex">
                  <button className="w-5 h-5 border border-gray-100 bg-gray-200">
                    -
                  </button>
                  <h2 className="w-5 h-5 text-sm font-semibold px-1 border border-gray-200">
                    1
                  </h2>
                  <button className="w-5 h-5 border border-gray-200 bg-gray-100 text-sm">
                    +
                  </button>
                </div>
                <div>
                  <FcLike />
                </div>
                <div>
                  <RiDeleteBin5Line />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
