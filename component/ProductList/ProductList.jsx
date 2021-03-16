import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiOutlineStar} from "react-icons/ai";

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
                className="w-111 h-44 flex bg-white border-b border-gray-300 justify-between "
              >
                <div className="flex space-x-3 items-center">
                  <div className="w-40 h-40 relative">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      alt="product Image"
                    />
                  </div>
                  <div className=" my-4 space-y-1">
                    <h2 className="text-xl">{item.title}</h2>
                    <h2 className="text-2xl text-red-500">Rs. {item.price}</h2>
                    <h3 className="text-gray-400 text-lg line-through">
                      Rs. {item.catagory}
                    </h3>
                    <h2 className=" w-32 text-center border rounded-2xl border-green-400">
                      {item.cut_proce}
                    </h2>
                  </div>
                </div>
                <div className="flex mt-7 mr-5">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </div>
            </Link>
          );
        })}
        <h3>arrow Function</h3>
      </div>
    </div>
  );
};

export default ProductList;
