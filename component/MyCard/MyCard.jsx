import React from "react";
import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {RiDeleteBin5Line} from "react-icons/ri";
import OrderSummary from "../OrderSummary/OrderSummary";
import CouponApply from "../coupon/CouponApply";
import Link from "next/link";

const MyCard = () => {
  return (
    <div className="flex space-x-6">
      <div className=" w-110 bg-white rounded">
        <div className="flex justify-between mx-3 border-b items-center">
          <div className="flex items-center space-x-4  py-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <h3 className="text-sm font-semibold"> Select Item to delete</h3>
          </div>
          <button className="w-20 h-7 text-center border border-red-500 text-sm font-semibold text-red-500    rounded-3xl">
            View all
          </button>
        </div>
        <div className="my-5 border-b mx-3 pb-2 flex">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
          />
          <div className="flex">
            <div className="mx-5 w-40 h-28 relative">
              <Image src="/selec2.png" layout="fill" objectFit="fill" />
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
        <div className="my-5 border-b mx-3 pb-2 flex">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-gray-600"
          />
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
      <div className="w-80 h-64 bg-white px-9 py-3 rounded">
        <OrderSummary />
        <CouponApply />

        <div className="flex justify-between my-3">
          <h2 className="text-sm font-semibold">Total</h2>
          <h2 className="text-sm font-semibold">Rs 15100 </h2>
        </div>
        <Link href="/Success">
          <button className=" bg-yellow-800 text-center w-64 h-10 rounded-3xl text-white my-2">
            Procced to chackout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyCard;
