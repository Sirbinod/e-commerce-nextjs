import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiFillStar} from "react-icons/ai";
import {BsFillGridFill} from "react-icons/bs";
import {FaList} from "react-icons/fa";

const ItemSelection = ({items}) => {
  return (
    <div>
      <div className="mb-4 ">
        <div className="flex items-center mb-3 justify-between">
          <h1 className="text-lg hidden lg:flex">Computers</h1>
          <div className="flex items-center sm:space-x-80 lg:space-x-0">
            <div className="flex items-center">
              <h3 className=" text-sm">Sort by</h3>
              <select className="w-30 bg-white px-2 h-9 mx-5  lg:mr-0 border-gray-500 border">
                <option>Best Match</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
              </select>
            </div>
            <div className="flex items-center">
              <h3 className="text-sm mx-2">View</h3>
              <BsFillGridFill className="w-7 h-7 text-gray-400 mx-2 " />
              <FaList className="w-7 h-7 text-gray-400 " />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4  2xl:grid-cols-5  gap-2 sm:gap-3">
          {items.map((item) => {
            return (
              <Link href="/ProductDetail">
                <div
                  key={item.id}
                  className="inline-block product-grid-card text-center bg-white py-4 rounded-xl cursor-pointer "
                >
                  <div className="relative w-32 h-28 lg:w-44 lg:h-40 mx-4  my-3">
                    <Image
                      src={item.img}
                      // style={{maxHeight: "180px", maxWidth: "160px"}}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                      alt="product image"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="products-name">{item.title}</h3>
                    <h3 className="products-price">Rs. {item.price}</h3>
                    <div className="flex justify-around my-2 items-center">
                      <span className="block product-cut-price">
                        Rs.{item.cut_proce}
                      </span>
                      <span className="product-discount rounded-full">
                        20% off
                      </span>
                    </div>
                    <div className="items-center flex mx-16 mt-3">
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="float-right my-3">
          <div className="flex space-x-1.5">
            <button className="w-7 h-7 bg-gray-200 border rounded border-gray-300">
              -
            </button>
            <h4 className="w-7 h-7 text-sm  text-white px-2.5 py-1 border rounded bg-blue-800 border-blue-800">
              1
            </h4>
            <button className="w-7 h-7 bg-gray-200 border rounded border-gray-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSelection;
