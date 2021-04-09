import React from "react";
import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {AiOutlineStar} from "react-icons/ai";
import Link from "next/link";

const Product = () => {
  const image = [
    {
      id: 1,
      img: "/lap1.png",
    },
    {
      id: 2,
      img: "/lap2.png",
    },
    {
      id: 3,
      img: "/lap3.png",
    },
    {
      id: 4,
      img: "/lap4.png",
    },
    {
      id: 4,
      img: "/lap4.png",
    },
  ];
  return (
    <div className="block space-y-3 lg:space-y-0 lg:flex mb-1">
      <div className="w-full text-center py-3 lg:w-1/2 items-center pb-2 bg-white">
        <div className=" w-72 h-52 sm:w-96 sm:h-72  relative mx-10 sm:mx-40 lg:mx-24 my-5 ">
          <Image
            src="/lap0.png"
            layout="fill"
            objectFit="fill"
            quality="100"
            alt="product image"
          />
        </div>
        <div className="hidden sm:flex space-x-7 mx-32 lg:mx-16 mb-4 ">
          {image.map((imge) => {
            return (
              <div className="w-18 h-16 border-gray-300 border px-1.5 py-1.5 hover:border-red-500">
                <div className="w-14 h-14 relative ">
                  <img
                    src={imge.img}
                    // layout="fill"
                    // objectFit="fill"
                    style={{maxWidth: "60px", maxHeight: "60px"}}
                    alt="product image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full  bg-white lg:w-1/2 py-5 lg:py-3 overflow-auto deatil-hi">
        <div className="flex item-center">
          <h2 className="ml-5 product-det-tit">
            For OnePlus Nord Starry Sky Solid Color Series Shockproof PC plus
            TPU Protective Case
          </h2>
          <div className="mx-2">
            <FcLike />
          </div>
        </div>
        <div className="my-2 mx-5 border-b border-gray-300">
          <div className="flex space-x-4 items-center">
            <div className="flex ">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <h3 className=" text-blue-700">0.01 ratings | 10 Reviews</h3>
          </div>
          <div className="flex my-2">
            <h2 className="text-gray-400">
              brand: <span className="text-blue-700">HP | More from HP</span>
            </h2>
          </div>
        </div>
        <div className="mx-5 my-3 border-b border-gray-300">
          <div className=" flex  space-x-6 mb-3 items-center">
            <h1 className="product-del-price"> Rs. 65000</h1>
            <h3 className="product-del-cut"> Rs 72000</h3>
            <h4 className=" py-1 text-center rounded-2xl product-del-dis">
              20% OFF
            </h4>
          </div>
        </div>
        <div className="mx-5 my-3 border-b border-gray-300">
          <div className="flex space-x-2 items-center mb-3">
            <h2 className="text-gray-400">Quantity:</h2>
            <div className="flex items-center space-x-1">
              <button className="w-7 h-7  bg-gray-400">-</button>
              <h2 className=" text-sm text-center py-1 w-8 h-7 border border-gray-400">
                1
              </h2>
              <button className="w-7 h-7 bg-gray-400">+</button>
            </div>
          </div>
        </div>
        <div className="mx-5 my-4 border-b border-gray-300">
          <div className="flex space-x-3 items-center mb-5">
            <Link href="/ShoppingCart">
              <button className="w-40 h-10 border border-red-600 rounded-3xl text-base text-red-700">
                Add to Card
              </button>
            </Link>
            <button className="w-40 h-10 bg-red-600 rounded-3xl text-base text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="mx-5 my-3 border-b border-gray-300">
          <div className="flex space-x-10 items-center mb-3">
            <div className=" w-40 flex space-x-4 items-center">
              <div className="w-10 h-10 relative">
                <Image src="/del1.png" layout="fill" objectFit="fill" />
              </div>
              <div>
                <h1 className="text-base font-meduim">Delivery</h1>
                <h2 className="text-sm text-gray-400">2-3 days</h2>
              </div>
            </div>
            <div>
              <h1 className="text-red-600">Rs. 100</h1>
              <h2>Kathmandu valley</h2>
            </div>
          </div>
        </div>
        <div className="mx-5 my-3 border-b border-gray-300">
          <div className="flex space-x-10 items-center mb-3">
            <div className="w-40 flex space-x-4 items-center">
              <div className="w-10 h-10 relative">
                <Image src="/del2.png" layout="fill" objectFit="fill" />
              </div>
              <div>
                <h1 className="text-base font-meduim">Golden Store</h1>
                <h2 className="text-sm text-gray-400">Seller</h2>
              </div>
            </div>
            <div>
              <h2 className="text-blue-700">View other from this seller </h2>
            </div>
          </div>
        </div>
        <div className="mx-4 my-7">
          <h1 className="text-xl font-meduim my-2">About this product</h1>
          <div className="flex space-x-20">
            <h2 className="text-sm text-gray-400">Sales Package</h2>
            <h2 className="text-sm">
              Laptop, power adaptor, user Guide, Warranty Documents
            </h2>
          </div>
        </div>
        <div className="mx-4 my-7">
          <h1 className="text-xl font-meduim my-2">Specification</h1>
          <div>
            <h2 className="text-sm text-gray-400">2TB ssd j ho tai ho so</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
