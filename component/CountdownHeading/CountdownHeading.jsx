import React from "react";
import ViewButton from "../ViewButton/ViewButton";

const CountdownHeading = () => {
  return (
    <>
      <div className=" hidden lg:flex items-center py-4 justify-between">
        {/* heading carousel item */}
        <div className="flex space-x-4 md:space-x-16 items-center">
          <h1 className="countdown-title">Deal of the day</h1>
          {/* date countdown */}
          <div className="flex">
            <h4 className="text-b md:text-xs">
              Ends in
              <span className=" countdown-item px-1.5 py-1.5 rounded-lg  text-white mx-1.5">
                01
              </span>
              :
              <span className="countdown-item px-1.5 py-1.5 rounded-lg text-white mx-1.5">
                01
              </span>
              :
              <span className=" countdown-item px-1.5 py-1.5 rounded-lg  text-white mx-1.5">
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
          <h1 className=" text-xl md:text-2xl font-semibold">
            Deal of the day
          </h1>
          <div>
            <ViewButton />
          </div>
        </div>
        <div className="my-1 py-2 mobile-countdown mb-3">
          <h1 className="text-white mx-14 sm:px-40 flex items-center text-xl font-medium">
            Ends in
            <span className=" text-gray-500 w-8 h-8 px-1.5 py-0.5  bg-white  mx-1.5">
              01
            </span>
            :
            <span className=" text-gray-500 w-8 h-8 px-1.5 py-0.5 bg-white mx-1.5">
              01
            </span>
            :
            <span className=" text-gray-500 w-8 h-8 px-1.5 py-0.5 bg-white mx-1.5">
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
