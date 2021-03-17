import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiFillStar} from "react-icons/ai";

const ItemSelection = () => {
  const items = [
    {
      id: 1,
      img: "/bag.png",
      title: "Go Pro",
      price: "200",
      catagory: "phone",
      cut_proce: "222 ",
    },
    {
      id: 2,
      img: "/bag.png",
      title: "Makeup",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
    {
      id: 3,
      img: "/bag.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
    {
      id: 4,
      img: "/bag.png",
      title: "Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
    {
      id: 5,
      img: "/bag.png",
      title: "TV",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 6,
      img: "/bag.png",
      title: "Laptop",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
    {
      id: 7,
      img: "/bag.png",
      title: "Realme",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
    {
      id: 1,
      img: "/bag.png",
      title: "Go Pro",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
    },
  ];
  return (
    <div>
      <div className="mb-4 ">
        <div className="flex items-center mb-3">
          <h2 className="text-lg">Computers</h2>
          <div className="flex items-center mx-40">
            <h3>Sort by</h3>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="inline-block w-52 text-center hover:shadow-3xl bg-white py-4 rounded-xl"
              >
                <div className="relative w-44 h-44 mx-4 my-2">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="fill"
                    alt="product image"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-light">{item.title}</h3>
                  <h3 className="text-lg font-medium">{item.catagory}</h3>
                  <h3 className="text-xl font-semibold text-red-700">
                    Rs. {item.price}
                  </h3>
                  <div className="flex justify-around my-2 items-center">
                    <span className="block text-gray-400 line-through">
                      Rs.{item.cut_proce}
                    </span>
                    <span className="border rounded-2xl w-18 items-center border-green-600 text-green-600 text-sm ">
                      20% off
                    </span>
                  </div>
                  <div className="items-center flex mx-16 my-3">
                    <AiFillStar style={{color: "yellow"}} />
                    <AiFillStar style={{color: "yellow"}} />
                    <AiFillStar style={{color: "yellow"}} />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
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
