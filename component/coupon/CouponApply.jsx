import React from "react";

const CouponApply = () => {
  return (
    <div>
      <div className=" border border-gray-300 h-9 flex items-center w-64 rounded-full my-4">
        <input
          className=" rounded-full w-40 h-6 py-4 text-gray-700 px-3 mr-5 focus:outline-none"
          id="search"
          type="text"
          placeholder="Enter Voucher Code"
        />

        <button class="bg-blue-700 w-18 text-white h-8 rounded-full py-2.5 px-4 hover:bg-gray-400 focus:outline-none flex items-center ">
          <a className="text-white">Apply</a>
        </button>
      </div>
    </div>
  );
};

export default CouponApply;
