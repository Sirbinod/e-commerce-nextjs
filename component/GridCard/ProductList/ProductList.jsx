import Link from "next/link";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import FilterHeader from "../../FilterHeader/FilterHeader";

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
      <FilterHeader />
      <div className="grid grid-cols-1">
        {items.map((item) => {
          return (
            <Link href="/ProductDetail">
              <div
                key={item.id}
                className=" product-list border flex bg-white border-b border-gray-200 "
              >
                <div className="flex lg:space-x-2 items-center">
                  <div className="product-list-img cursor-pointer relative mx-3 lg:mx-6 mt-1.5">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                      alt="product Image"
                    />
                  </div>
                  <div className="sm:flex sm:w-96 justify-between">
                    <div className="my-3 lg:pl-10">
                      <h2 className="products-name my-1 cursor-pointer">
                        {item.title}
                      </h2>
                      <h2 className="products-price my-1 py-1">
                        Rs. {item.price}
                      </h2>
                      <h3 className=" product-cut-price my-1 mb-2">
                        Rs. {item.catagory}
                      </h3>
                      <h2 className=" product-discount w-20 rounded-2xl text-center">
                        {item.cut_proce}
                      </h2>
                    </div>
                    <div className="flex  sm:mt-5 mr-5">
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar style={{color: "yellow"}} />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
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
