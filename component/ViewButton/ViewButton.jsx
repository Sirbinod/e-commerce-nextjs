import React from "react";

const ViewButton = () => {
  return (
    <div>
      <button className="w-16 h-5 md:w-20 md:h-7 text-center border border-red-500 text-xs md:text-sm font-medium text-red-500  rounded-3xl focus:outline-none hover:bg-red-500 hover:text-white">
        View all
      </button>
    </div>
  );
};

export default ViewButton;
