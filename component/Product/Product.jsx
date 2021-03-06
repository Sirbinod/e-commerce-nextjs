import React, {useState, useRef, useEffect} from "react";
import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {AiOutlineStar} from "react-icons/ai";
import Link from "next/link";
const Product = () => {
  const [count, setCount] = useState(1);

  const image = {
    id: 1,
    img: [
      "/laptop.png",
      "/laptop.png",
      "/selec3.png",
      "/selec4.png",
      "/selec5.png",
    ],
  };

  const [thump, setThump] = useState("/laptop.png");

  return (
    <div className="block space-y-3 lg:space-y-0 lg:flex mb-1">
      <div className="w-full text-center py-3 lg:w-1/2 items-center pb-2 bg-white">
        <div className=" w-72 h-52 sm:w-96 sm:h-72  relative mx-10 sm:mx-40 lg:mx-16 my-5 ">
          {/* <div style={{height: "200px", width: "200px"}}> */}
          <img
            //src={imge.img[index]}
            src={thump}
            style={{maxWidth: "100%", maxHeight: "100%", objectFit: "cover"}}
            alt="product image"
            id="imageMagnify"
          />
        </div>

        <div className="hidden sm:flex space-x-4 mx-32 lg:mx-16 mb-4 ">
          {image.img.map((imge) => {
            return (
              <div className="w-16 h-14 border-gray-300 border px-2 py-1.5 hover:border-red-500">
                <div className="w-11 h-11 relative ">
                  <img
                    src={imge}
                    onClick={() => {
                      setThump(imge);
                    }}
                    // layout="fill"
                    // objectFit="fill"
                    style={{maxWidth: "100%", maxHeight: "100%"}}
                    alt="product image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full bg-white lg:w-1/2 py-5 lg:py-3 overflow-auto deatil-hi">
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
            <h3 className="ret-rev text-blue-700">0.01 ratings | 10 Reviews</h3>
          </div>
          <div className="flex my-2">
            <h2 className="text-xs text-gray-400">
              brand:
              <span className="ret-rev text-blue-700">HP | More from HP</span>
            </h2>
          </div>
        </div>
        <div className="mx-5 my-2 border-b border-gray-300">
          <div className=" flex  space-x-6 mb-3 items-center">
            <h1 className="product-del-price"> Rs. 65000</h1>
            <h3 className="product-del-cut "> Rs 72000</h3>
            <h4 className="px-4 pt-0.5 text-center rounded-2xl product-del-dis">
              20% OFF
            </h4>
          </div>
        </div>
        <div className="mx-5 my-3 border-b border-gray-300">
          <div className="flex space-x-2 items-center mb-3">
            <h2 className="text-gray-400 text-xs">Quantity:</h2>
            <div className="flex items-center space-x-1">
              <button
                className="w-6 h-6  bg-gray-400 focus:outline-none"
                onClick={() => {
                  count >= 2 ? setCount(count - 1) : count;
                }}
              >
                -
              </button>
              <h2 className=" text-sm text-center py-0.5 w-7 h-6 border border-gray-400">
                {count}
              </h2>
              <button
                className="w-6 h-6 bg-gray-400 focus:outline-none"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="mx-5 my-4 border-b border-gray-300">
          <div className="flex space-x-3 items-center mb-5">
            <Link href="/ShoppingCart">
              <button className="w-32 h-8 addcart-button rounded-3xl focus:outline-none">
                Add to Cart
              </button>
            </Link>
            <button className="w-32 h-8 rounded-3xl buynow-button focus:outline-none">
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
                <h1 className="text-sm font-meduim">Delivery</h1>
                <h2 className="text-xs text-gray-400">2-3 days</h2>
              </div>
            </div>
            <div>
              <h1 className="text-sm text-red-600">Rs. 100</h1>
              <h2 className=" text-xs">Kathmandu valley</h2>
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
                <h1 className="text-sm font-meduim">Golden Store</h1>
                <h2 className="text-xs text-gray-400">Seller</h2>
              </div>
            </div>
            <div>
              <h2 className="text-xs text-blue-700">
                View other from this seller{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-4 my-7">
          <h1 className="text-base font-meduim my-2">About this product</h1>
          <div className="flex space-x-20">
            <h2 className="text-xs text-gray-400">Sales Package</h2>
            <h2 className="text-xs">
              Laptop, power adaptor, user Guide, Warranty Documents
            </h2>
          </div>
        </div>
        <div className="mx-4 my-7">
          <h1 className="text-base font-meduim my-2">Specification</h1>
          <div>
            <h2 className="text-xs text-gray-400">2TB ssd j ho tai ho so</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
