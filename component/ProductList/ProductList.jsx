import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

const ProductList = () => {
  const items = [
    {
      id: 5,
      img: "/selec1.png",
      title: "For OnePlus Nord Starry Sky ",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
    {
      id: 6,
      img: "/selec2.png",
      title: "For OnePlus Nord Starry Sky ",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
    {
      id: 7,
      img: "/selec3.png",
      title: "Realme",
      price: "200",
      catagory: "222",
      cut_proce: "20% OFF",
    },
    {
      id: 5,
      img: "/selec1.png",
      title: "For OnePlus Nord Starry Sky ",
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
                className=" product-list border flex bg-white border-b border-gray-200 justify-between"
              >
                <div className="flex space-x-2 items-center">
                  <div className="product-list-img  relative mx-6 mt-1.5">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                      alt="product Image"
                    />
                  </div>
                  <div className=" my-4 pl-10">
                    <h2 className="product-list-name my-1">{item.title}</h2>
                    <h2 className="product-list-price my-1">
                      Rs. {item.price}
                    </h2>
                    <h3 className=" product-list-cut my-1">
                      Rs. {item.catagory}
                    </h3>
                    <h2 className=" product-list-disc py-1.5 my-2.5 rounded-2xl text-center">
                      {item.cut_proce}
                    </h2>
                  </div>
                </div>
                <div className="flex lg:mt-14 2xl:mt-20 mr-5">
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
