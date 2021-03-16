import React from "react";
import {BiSearch} from "react-icons/bi";
import Image from "next/image";

const ItemSelection = () => {
  const items = [
    {
      id: 1,
      img: "/bag.png",
      title: "Go Pro",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/bag.png",
      title: "Makeup",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/bag.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/bag.png",
      title: "Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
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
      cut_proce: "20",
    },
    {
      id: 7,
      img: "/bag.png",
      title: "Realme",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 1,
      img: "/bag.png",
      title: "Go Pro",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/bag.png",
      title: "Makeup",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/bag.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/bag.png",
      title: "Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 5,
      img: "/bag.png",
      title: "Media",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
  ];
  return (
    <div>
      <div className="flex space-x-2">
        <h3>Electric </h3>
        <h3>Computer</h3>
      </div>
      <div className="flex space-x-7    ">
        <div className="w-1/5 flex flex-col bg-gray-50 px-3 py-2">
          <div className="flex flex-col border-b py-2 border-gray-300">
            <h3 className="text-lg">brand</h3>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
              />
              <span class="ml-2 text-sm text-gray-700">HP</span>
            </label>
            <a href="" className="text-blue-400">
              View More
            </a>
          </div>
          <div className=" mt-3 border-b border-gray-300">
            <h3>Price</h3>
            <div className=" my-3   flex items-center space-x-2 ">
              <input
                className=" w-11 h-6 border border-gray-400  text-gray-700  focus:outline-none"
                id="search"
                type="text"
                placeholder="100"
              />
              <h5>-</h5>
              <input
                className=" w-11 h-6 border border-gray-400  text-gray-700  focus:outline-none"
                id="search"
                type="text"
                placeholder="1000"
              />
              <button className="w-6 h-6 py-1 px-1 bg-blue-600 items-center">
                <BiSearch />
              </button>
            </div>
          </div>
          <div className="flex flex-col border-b py-2 border-gray-300">
            <h3 className="text-lg">Processer</h3>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
              />
              <span class="ml-2 text-sm text-gray-700">intel</span>
            </label>
          </div>
          <div className="flex flex-col border-b py-2 border-gray-300">
            <h3 className="text-lg">Screen Size</h3>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
              />
              <span class="ml-2 text-sm text-gray-700">14 inch</span>
            </label>
          </div>
          <div className="flex flex-col border-b py-2 border-gray-300">
            <h3 className="text-lg">Warrenty Period</h3>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
              />
              <span class="ml-2 text-sm text-gray-700">yes</span>
            </label>
          </div>
        </div>
        <div className="mb-4 ">
          <div className="flex items-center">
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
                  className="inline-block w-52 mx-2 text-center hover:shadow-3xl bg-gray-50 py-4"
                >
                  <div className="relative w-48 h-48 mx-5 my-3">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      alt="product image"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xl">{item.title}</h3>
                    <h3 className="text-xl">{item.catagory}</h3>
                    <h3 className="text-xl text-red-700">Rs. {item.price}</h3>
                    <div className="flex justify-around">
                      <span className="block text-gray-300 line-through">
                        Rs.{item.cut_proce}
                      </span>
                      <span className="border rounded-2xl w-16 items-center border-green-600 text-green-600 text-sm">
                        20% off
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="items-end my-3">
            <h2> arrow button</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSelection;
