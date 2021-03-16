import React from "react";
import Image from "next/image";

const JustInGrid = () => {
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
      <div className="grid grid-cols-6 gap-4">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block w-48 text-center hover:shadow-3xl bg-white py-4"
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
                <h3 className="text-xl">{item.title}</h3>
                <h3 className="text-xl">{item.catagory}</h3>
                <h3 className="text-xl text-red-700">Rs. {item.price}</h3>
                <div className="flex justify-around">
                  <span className="block text-gray-300 line-through">
                    Rs.{item.cut_proce}{" "}
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
    </div>
  );
};

export default JustInGrid;
