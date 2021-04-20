import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import Image from "next/image";

import Link from "next/link";
const ShoppingBillingCard = () => {
  const arr = [
    {id: 1, img: "/selec1.png"},
    {id: 2, img: "/selec4.png"},
  ];
  return (
    <div className="flex justify-between">
      <div className="shopp-bill-card">
        <h1 className=" mx-5 py-3 border-b select-item border-gray-300">
          3 Items
        </h1>
        {arr.map((im) => {
          return (
            <div className="mx-5 flex py-4 my-3 pb-5 border-b border-gray-300 items-center">
              <div className="mr-5 w-32 h-24  relative">
                <Image
                  src={im.img}
                  layout="fill"
                  objectFit="fill"
                  quality="100"
                  alt="select image"
                />
              </div>
              <div className=" space-y-2">
                <h1 className="select-item-titl">
                  Laptop 10.1 Inch Windows 10 Tablet 2-in-1 Mini Laptop 4G RAM
                  Gamer With Data cable Keyboard Laptop
                </h1>
                <div className="flex items-center">
                  <div className="flex space-x-8 xl:space-x-6 2xl:space-x-10 items-center my-1 mr-28 xl:mr-36 2x:mr-48 ">
                    <h2 className="select-item-price">Rs. 15000</h2>
                    <h3 className="text-gray-500 line-through text-base font-medium">
                      Rs. 20000
                    </h3>
                    <h3 className="select-item-dis rounded-2xl text-center py-1">
                      25% off
                    </h3>
                    <h3 className="text-base font-medium text-gray-500">
                      Quantity: 1
                    </h3>
                  </div>
                  <div>
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingBillingCard;
