import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatagoryGrid = () => {
  const catagItem = [
    {
      id: 1,
      img: "/Category/Cat1.png",
      name: "Laptop",
    },
    {
      id: 2,
      img: "/Category/Cat2.png",
      name: "Mobiles",
    },
    {
      id: 3,
      img: "/Category/Cat3.png",
      name: "Shampoo",
    },
    {
      id: 4,
      img: "/Category/Cat4.png",
      name: "Shoes",
    },
    {
      id: 5,
      img: "/Category/Cat5.png",
      name: "Makeup Kit",
    },
    {
      id: 6,
      img: "/Category/Cat6.png",
      name: "Watches",
    },
    {
      id: 7,
      img: "/Category/Cat7.png",
      name: "Bags",
    },
    {
      id: 8,
      img: "/Category/Cat8.png",
      name: "Groceries",
    },
    {
      id: 9,
      img: "/Category/Cat9.png",
      name: "Moniter",
    },
    {
      id: 10,
      img: "/Category/Cat10.png",
      name: "Furniture",
    },
    {
      id: 11,
      img: "/Category/Cat11.png",
      name: "Jackets",
    },
    {
      id: 12,
      img: "/Category/Cat12.png",
      name: "Sanitizer",
    },
    {
      id: 13,
      img: "/Category/Cat13.png",
      name: "Speaker",
    },
    {
      id: 14,
      img: "/Category/Cat14.png",
      name: "Flowers",
    },
    {
      id: 15,
      img: "/Category/Cat15.png",
      name: "Books",
    },
    {
      id: 16,
      img: "/Category/Cat16.png",
      name: "Home appliances",
    },
  ];
  return (
    // create 8 column
    <div className=" grid grid-cols-3 sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-1">
      {catagItem.map((item) => {
        return (
          <Link href="/Selection">
            <div
              key={item.id}
              className="inline-block text-center w-30 md:w-34 xl:w-35  2xl:w-41 bg-white hover:shadow-2xl cursor-pointer"
            >
              <div className=" md:mx-4 mt-6 lg:w-24 lg:h-24 2xl:mx-6 2xl:mt-6">
                {/* catagory image  */}
                <img
                  src={item.img}
                  style={{maxHeight: "100%", maxHeight: "100%"}}
                  alt="category image"
                />
              </div>
              {/* catagory name */}
              <h3 className="my-3 text-xs font-normal">{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CatagoryGrid;
