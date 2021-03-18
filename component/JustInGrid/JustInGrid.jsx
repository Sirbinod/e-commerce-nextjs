import React from "react";
import Image from "next/image";

const JustInGrid = () => {
  const items = [
    {
      id: 1,
      img: "/just1.png",
      title: "New XOVO mobile",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/just2.png",
      title: "Sun Glass",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/just3.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/just4.png",
      title: "Headphone",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 5,
      img: "/just5.png",
      title: "Bag Pack",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 6,
      img: "/just6.png",
      title: "New Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 7,
      img: "/just7.png",
      title: "Real Shoes",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 1,
      img: "/just8.png",
      title: "Red Jecket",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/just9.png",
      title: "New Camera",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/just10.png",
      title: "New Keyword",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/just11.png",
      title: "king Chair",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 5,
      img: "/just12.png",
      title: "Bike Cycle",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block w-48 text-center hover:shadow-3xl bg-white py-4 rounded-xl"
            >
              <div className="relative w-40 h-40 mx-4 my-2">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="fill"
                  alt="product image"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <h3 className="text-lg font-medium">{item.catagory}</h3>
                <h3 className="text-xl font-semibold text-red-700">
                  Rs. {item.price}
                </h3>
                <div className="flex justify-around my-2 items-center">
                  <span className="block text-gray-400 line-through">
                    Rs.{item.cut_proce}{" "}
                  </span>
                  <span className="border rounded-2xl w-18 items-center border-green-600 text-green-600 text-sm ">
                    20% off
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JustInGrid;
