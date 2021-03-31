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
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 2xl:grid-cols-7">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block w-28 md:w-46 text-center hover:shadow-3xl bg-white-100 md:py-4 rounded-xl"
            >
              <div className="relative w-24 h-24 m-2 md:w-40 md:h-40 md:mx-4 md:my-2">
                <Image
                  src={item.img}
                  layout="fixed"
                  // objectFit="fill"
                  width="130"
                  height="135"
                  alt="product image"
                />
              </div>
              <div className="mt-2">
                <h3 className=" text-base font-normal md:text-lg md:font-medium font-sans ">
                  {item.title}
                </h3>
                <h3 className=" text-base font-normal md:text-lg md:font-medium font-sans">
                  {item.catagory}
                </h3>
                <h3 className="text-base font-medium md:text-xl md:font-semibold text-red-666">
                  Rs. {item.price}
                </h3>
                <div className="flex justify-around my-1 md:my-2 items-center">
                  <span className=" text-xs font-extralight block text-gray-222 line-through">
                    Rs.{item.cut_proce}
                  </span>
                  <span className="border rounded-2xl text-xs w-14 md:w-18 items-center border-green-555 text-green-555 md:text-sm ">
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
