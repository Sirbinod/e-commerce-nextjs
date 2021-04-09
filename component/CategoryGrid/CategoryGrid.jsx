import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatagoryGrid = () => {
  const catagItem = [
    {
      id: 1,
      img: "/catag1.png",
      name: "Laptop",
    },
    {
      id: 2,
      img: "/catag2.png",
      name: "Mobiles",
    },
    {
      id: 3,
      img: "/catag3.png",
      name: "Shampoo",
    },
    {
      id: 4,
      img: "/catag4.png",
      name: "Shoes",
    },
    {
      id: 5,
      img: "/catag5.png",
      name: "Makeup Kit",
    },
    {
      id: 6,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 7,
      img: "/catag7.png",
      name: "Bags",
    },
    {
      id: 8,
      img: "/catag8.png",
      name: "Grocer ies",
    },
    {
      id: 9,
      img: "/catag9.png",
      name: "Moniter",
    },
    {
      id: 10,
      img: "/catag10.png",
      name: "Furniture",
    },
    {
      id: 11,
      img: "/catag11.png",
      name: "Jackets",
    },
    {
      id: 12,
      img: "/catag12.png",
      name: "Sanitizer",
    },
    {
      id: 13,
      img: "/catag13.png",
      name: "Speaker",
    },
    {
      id: 14,
      img: "/catag14.png",
      name: "Flowers",
    },
    {
      id: 15,
      img: "/catag15.png",
      name: "Books",
    },
    {
      id: 16,
      img: "/catag16.png",
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
              className="inline-block text-center w-30 md:w-34 xl:w-35  2xl:w-41 bg-white hover:shadow-3xl cursor-pointer"
            >
              <div className=" md:mx-4 mt-4 2xl:w-24 2xl:h-24 2xl:mx-8 2xl:mt-6">
                {/* catagory image  */}
                <img
                  src={item.img}
                  style={{maxHeight: "90px", maxHeight: "100px"}}
                  alt="category image"
                />
              </div>
              {/* catagory name */}
              <h3 className="my-3 text-sm font-normal">{item.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CatagoryGrid;
