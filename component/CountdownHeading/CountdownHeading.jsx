import React from "react";
import ViewButton from "../ViewButton/ViewButton";

const CountdownHeading = () => {
  return (
    <>
      <div className=" hidden lg:flex items-center py-4 justify-between">
        {/* heading carousel item */}
        <div className="flex space-x-4 md:space-x-16 items-center">
          <h1 className="text-2xl font-semibold ">Deal of the day</h1>
          {/* date countdown */}
          <div className="flex">
            <h4 className="text-xs md:text-sm">
              Ends in
              <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-555 text-white-100 mx-1.5">
                01
              </span>
              :
              <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-555 text-white-100 mx-1.5">
                01
              </span>
              :
              <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-555 text-white-100 mx-1.5">
                01
              </span>
              hrs
            </h4>
          </div>
          {/* end countdown */}
        </div>
        <div>
          <ViewButton />
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl md:text-2xl font-semibold ">
            Deal of the day
          </h1>
          <div>
            <ViewButton />
          </div>
        </div>
        <div className="  my-1 py-1.5 h-10 bg-red-555">
          <h1 className="text-white-100 mx-14 sm:px-40 flex items-center text-base font-medium">
            Ends in
            <span className=" text-gray-555 w-7 h-7 px-1.5 py-0.4  bg-white-100  mx-1.5">
              01
            </span>
            :
            <span className=" text-gray-555 w-7 h-7 px-1.5 py-0.4  bg-white-100 mx-1.5">
              01
            </span>
            :
            <span className=" text-gray-555 w-7 h-7 px-1.5 py-0.4  bg-white-100 mx-1.5">
              01
            </span>
            hrs
          </h1>
        </div>
      </div>
    </>
  );
};

export default CountdownHeading;
