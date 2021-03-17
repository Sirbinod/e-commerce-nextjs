import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

const ProductList = () => {
  const items = [
    {
      id: 5,
      img: "/bag.png",
      title: "For OnePlus Nord Starry Sky ",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
    {
      id: 6,
      img: "/bag.png",
      title: "For OnePlus Nord Starry Sky ",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
    {
      id: 7,
      img: "/bag.png",
      title: "Realme",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
  ];
  return (
    <div className="mb-4 ">
      <div className="flex items-center mb-2">
        <h2 className="text-lg">Computers</h2>
        <div className="flex items-center mx-40">
          <h3>Sort by</h3>
        </div>
      </div>
      <div className="grid grid-cols-1">
        {items.map((item) => {
          return (
            <Link href="/ProductDetail">
              <div
                key={item.id}
                className="w-111 h-44 flex bg-white border-b border-gray-200 justify-between"
              >
                <div className="flex space-x-3 items-center">
                  <div className="w-40 h-40  relative mx-4">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      alt="product Image"
                    />
                  </div>
                  <div className=" my-4 pl-10">
                    <h2 className="text-sm  font-semibold">{item.title}</h2>
                    <h2 className="text-base font-bold text-red-500">
                      Rs. {item.price}
                    </h2>
                    <h3 className=" text-sm text-gray-400 line-through">
                      Rs. {item.catagory}
                    </h3>
                    <h2 className=" my-1 w-20 py-0.5 text-sm font-semibold text-green-600 text-center border rounded-2xl border-green-600">
                      {item.cut_proce}
                    </h2>
                  </div>
                </div>
                <div className="flex mt-7 mr-5">
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="float-right mt-2">
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
  );
};

export default ProductList;
