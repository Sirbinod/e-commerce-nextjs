import React from "react";
import Link from "next/link";
import {BsFillPersonFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {BiPhone} from "react-icons/bi";
import {HiMail} from "react-icons/hi";
const ShopBillInfo = () => {
  return (
    <div>
      <div className="card-w px-9 py-4 rounded">
        <h1 className="payment-cart-tit">Shopping & Billing Information</h1>
        <div className="flex space-x-1 mt-6 items-center">
          <h2 className="text-lg pb-0.5">
            <BsFillPersonFill />
          </h2>
          <h2 className="pre-name">Jone Doe</h2>
        </div>
        <div className="flex space-x-1 my-3 items-center">
          <h2 className="text-lg pb-0.5">
            <HiLocationMarker />
          </h2>
          <h2 className="pre-name">Sankhamul-6, Kathmandu, Nepal</h2>
        </div>
        <div className="flex space-x-1 my-3 items-center">
          <h2 className="text-lg pb-0.5">
            <BiPhone />
          </h2>
          <h2 className="pre-name">98012234567</h2>
        </div>
        <div className="flex space-x-1 my-3 items-center">
          <h2 className="text-lg pb-0.5">
            <HiMail />
          </h2>
          <h2 className="pre-name">sit2021@gmail.com</h2>
        </div>
        <div className=" border border-gray-300 h-9 flex items-center w-80 rounded-full my-7">
          <input
            className=" rounded-full w-56 h-6 py-4 text-gray-700 px-3 mr-5 focus:outline-none"
            id="search"
            type="text"
            placeholder="Enter Voucher Code"
          />

          <button className="bg-blue-700 w-18 text-white h-8 rounded-full py-2.5 px-4 hover:bg-gray-400 focus:outline-none flex items-center ">
            <a className="text-white">Apply</a>
          </button>
        </div>

        <div className="flex justify-between mt-5 ">
          <h2 className="subtotle">Total</h2>
          <h2 className="total">Rs 15100 </h2>
        </div>
        <Link href="/BillPayment">
          <button className=" pro-button text-center w-80 h-11 rounded-3xl  my-3">
            Procced to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopBillInfo;
