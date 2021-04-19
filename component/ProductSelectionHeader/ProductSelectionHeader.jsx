import React from "react";

const ProductSelectionHeader = () => {
  return (
    <div>
      <div className=" hidden lg:flex sm:space-x-2 mb-2 items-center ">
        <h3 className="text-xs text-gray-500 mr-1 ">Electric </h3>
        <h3 className="text-base text-gray-500">&#62;</h3>
        <h3 className="text-xs text-yellow-700 ">Computer</h3>
      </div>
    </div>
  );
};

export default ProductSelectionHeader;
