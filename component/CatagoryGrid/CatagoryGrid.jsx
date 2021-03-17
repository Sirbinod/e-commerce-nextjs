import React from "react";
import Image from "next/image";

const CatagoryGrid = () => {
  const catagItem = [
    {
      id: 1,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 2,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 3,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 4,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 5,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 6,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 7,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 8,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 9,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 10,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 11,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 12,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 13,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 14,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 15,
      img: "/watch.png",
      name: "Watches",
    },
    {
      id: 16,
      img: "/watch.png",
      name: "Watches",
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
            <div className=" relative w-24 h-24 mx-6 mt-3 rounded-3xl">
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
