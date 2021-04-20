import React from "react";
import Link from "next/link";
const OrderSummery = () => {
  return (
    <div>
      <div className="w-96 bg-white px-9 py-4 rounded">
        <h1 className="payment-cart-tit">Order Summary</h1>
        <div className="flex justify-between mt-4">
          <h2 className="text-sm text-gray-500">Subtotal (1 item)</h2>
          <h2 className="subtotle">Rs 15000</h2>
        </div>
        <div className="flex justify-between my-3 py-1">
          <h2 className="text-sm text-gray-500">Delivary Charge</h2>
          <h2 className="subtotle">Rs 100 </h2>
        </div>
        <div className=" border border-gray-300 h-9 flex items-center w-80 rounded-full my-4">
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
        <Link href="/ShoppingBilling">
          <button className=" pro-button text-center w-80 h-11 rounded-3xl  my-3">
            Procced to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummery;
