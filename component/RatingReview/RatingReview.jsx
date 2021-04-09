import React from "react";
import {AiFillStar} from "react-icons/ai";
import {AiFillLike} from "react-icons/ai";
import {AiFillDislike} from "react-icons/ai";

const RatingReview = () => {
  return (
    <div className="bg-white">
      <div className="mx-5 py-4">
        <h1>Rating & Reviews</h1>
      </div>
      <div className="mx-5 block sm:flex sm:space-x-40 items-center border-b border-gray-300 pb-5">
        <div>
          <div className="flex space-x-5 my-1">
            <div className="flex">
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
            </div>
            <div className="w-40">
              <div className="w-40 h-5 bg-yellow-500"></div>
            </div>
            <h3>60%</h3>
          </div>
          <div className="flex space-x-5 my-1">
            <div className="flex">
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar />
            </div>
            <div className="w-40">
              <div className="w-24 h-5 bg-yellow-500"></div>
            </div>
            <h3>20%</h3>
          </div>
          <div className="flex space-x-5 my-1">
            <div className="flex">
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="w-40">
              <div className="w-16 h-5 bg-yellow-500"></div>
            </div>
            <h3>10%</h3>
          </div>
          <div className="flex space-x-5 my-1">
            <div className="flex">
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="w-40">
              <div className="w-12 h-5 bg-yellow-500"></div>
            </div>
            <h3>6%</h3>
          </div>
          <div className="flex space-x-5 my-1">
            <div className="flex">
              <AiFillStar style={{color: "yellow"}} />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="w-40">
              <div className="w-8 h-5 bg-yellow-500"></div>
            </div>
            <h3>4%</h3>
          </div>
        </div>
        <div className="text-center mt-6 ">
          <h1 className="text-xl font-semibold">3 / 5</h1>
          <div className="flex mx-32 sm:mx-0">
            <AiFillStar style={{color: "yellow"}} />
            <AiFillStar style={{color: "yellow"}} />
            <AiFillStar style={{color: "yellow"}} />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4 className="text-base text-gray-400">100 ratings</h4>
        </div>
      </div>
      <div className="my-5 mx-5 border-b border-gray-300">
        <div className="flex mb-3">
          <AiFillStar style={{color: "yellow"}} />
          <AiFillStar style={{color: "yellow"}} />
          <AiFillStar style={{color: "yellow"}} />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h3 className=" text-gray-600 text-base">Rewon Jecker</h3>
        <h3 className=" text-gray-600 text-base">19 Mar 2020</h3>
        <h2 className=" w-80sm:w-96 my-3">
          To anyone that's scrolling rn, you did a great job in hangin on. Let's
          do it for a few more moment, few more days, and few more years. Hang
          on there, you're stronger than you think you are.
        </h2>
        <div className="flex space-x-3 items-center mb-2">
          <div className="flex space-x-1 items-center">
            <AiFillLike />
            <h3>23</h3>
          </div>
          <div className="flex space-x-1 items-center">
            <AiFillDislike />
            <h3>23</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingReview;
