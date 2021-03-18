import React from "react";
import Image from "next/image";

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
    <div className="grid grid-cols-8 gap-1">
      {catagItem.map((item) => {
        return (
          <div
            key={item.id}
            className="inline-block text-center w-36 bg-white hover:shadow-3xl"
          >
            <div className=" relative w-20 h-20 mx-6 mt-4 rounded-3xl">
              <Image src={item.img} layout="fill" objectFit="fill" />
            </div>
            <h3 className="my-3 text-sm font-normal">{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CatagoryGrid;
