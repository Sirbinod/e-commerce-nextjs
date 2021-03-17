import React from "react";
import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {RiDeleteBin5Line} from "react-icons/ri";

const MyCard = () => {
  return (
    <div className="flex space-x-6">
      <div className=" w-110 bg-white rounded">
        <div className="flex justify-between mx-3 border-b">
          <div className="flex items-center space-x-4  py-3">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-gray-600"
            />
            <h3 className="text-sm font-semibold"> Select Item to delete</h3>
          </div>
        </div>
        <div className="my-5 border-b mx-3 pb-2 flex">
          <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" />
          <div className="flex">
            <div className="mx-5 w-40 h-28 relative">
              <Image src="/lap0.png" layout="fill" objectFit="fill" />
            </div>
            <div className="mr-10">
              <h1 className="text-sm font-medium">
                Laptop 10.1 Inch Windows 10 Tablet 2-in-1 Mini Laptop 4G RAM
                Gamer With Detachable Keyboard Laptop
              </h1>
              <div className="flex space-x-8 items-center my-1">
                <h2 className="text-red-700 text-lg font-semibold">
                  {" "}
                  Rs. 15000
                </h2>
                <h3 className="text-gray-500 line-through text-base font-medium">
                  Rs. 20000
                </h3>
                <h3 className="text-sm font-semibold text-green-800 border border-green-700 rounded-2xl w-18 text-center">
                  25% off
                </h3>
                <h3 className="text-base font-medium text-gray-500">
                  Sold by Golden Store
                </h3>
              </div>
              <div className="flex space-x-5 my-4    items-center">
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
        <div className="my-5 border-b mx-3 pb-2 flex">
          <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" />
          <div className="flex">
            <div className="mx-5 w-40 h-28 relative">
              <Image src="/lap0.png" layout="fill" objectFit="fill" />
            </div>
            <div className="mr-10">
              <h1 className="text-sm font-medium">
                Laptop 10.1 Inch Windows 10 Tablet 2-in-1 Mini Laptop 4G RAM
                Gamer With Detachable Keyboard Laptop
              </h1>
              <div className="flex space-x-8 items-center my-1">
                <h2 className="text-red-700 text-lg font-semibold">
                  Rs. 15000
                </h2>
                <h3 className="text-gray-500 line-through text-base font-medium">
                  Rs. 20000
                </h3>
                <h3 className="text-sm font-semibold text-green-800 border border-green-700 rounded-2xl w-18 text-center">
                  25% off
                </h3>
                <h3 className="text-base font-medium text-gray-500">
                  Sold by Golden Store
                </h3>
              </div>
              <div className="flex space-x-5 my-4    items-center">
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
      <div className="w-80 h-64 bg-white px-4 py-3 rounded">
        <h1 className="text-base font-semibold">Order Summary</h1>
        <div className="flex justify-between my-3">
          <h2 className="text-sm text-gray-500">Subtotal (1 item)</h2>
          <h2 className="text-sm font-semibold">Rs 15000</h2>
        </div>
        <div className="flex justify-between my-3">
          <h2 className="text-sm text-gray-500">Delivary Charge</h2>
          <h2 className="text-sm font-semibold">Rs 100 </h2>
        </div>
        <div className=" border border-gray-300 h-9 flex items-center w-72 rounded-full my-3">
          <input
            className=" rounded-full w-48 h-6 py-4 text-gray-700 px-3 mr-5 focus:outline-none"
            id="search"
            type="text"
            placeholder="Enter Voucher Code"
          />

          <button class="bg-blue-700 w-18 text-white h-8 rounded-full py-2.5 px-4 hover:bg-gray-400 focus:outline-none flex items-center ">
            <a className="text-white">Apply</a>
          </button>
        </div>
        <div className="flex justify-between my-3">
          <h2 className="text-sm font-semibold">Total</h2>
          <h2 className="text-sm font-semibold">Rs 15100 </h2>
        </div>
        <button className=" bg-yellow-800 text-center w-72 h-10 rounded-3xl text-white my-2">
          Procced to chackout
        </button>
      </div>
    </div>
  );
};

export default MyCard;
