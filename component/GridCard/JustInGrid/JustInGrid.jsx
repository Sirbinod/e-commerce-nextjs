import React from "react";
import Image from "next/image";
import Link from "next/link";

const JustInGrid = () => {
  const items = [
    {
      id: 1,
      img: "/JustIn/justin1.png",
      title: "New XOVO mobile",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/JustIn/justin2.png",
      title: "Sun Glass",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/JustIn/justin3.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/JustIn/justin4.png",
      title: "Headphone",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 5,
      img: "/JustIn/justin5.png",
      title: "Bag Pack",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 6,
      img: "/JustIn/justin6.png",
      title: "New Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 7,
      img: "/JustIn/justin7.png",
      title: "Real Shoes",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 8,
      img: "/JustIn/justin8.png",
      title: "Red Jecket",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 9,
      img: "/JustIn/justin9.png",
      title: "New Camera",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 10,
      img: "/JustIn/justin10.png",
      title: "New Keyword",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 11,
      img: "/JustIn/justin11.png",
      title: "king Chair",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 12,
      img: "/JustIn/justin12.png",
      title: "Bike Cycle",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 lg:gap-2 ">
        {items.map((item) => {
          return (
            <Link href="/ProductDetail">
              <div
                key={item.id}
                className="inline-block justin-card md:py-4  cursor-pointer"
              >
                <div className="relative w-40 h-40 mx-6 mb-4 sm:mx-9 lg:mx-4 2xl:mx-7 my-2">
                  <img
                    src={item.img}
                    style={{maxHeight: "140px", maxWidth: "140px"}}
                    alt="product image"
                  />
                </div>
                <div className="mt-2">
                  <h1 className="justin-title">{item.title}</h1>
                  <h3 className="justin-price py-1">Rs. {item.price}</h3>
                  <div className="flex justify-around my-1 md:my-2 items-center">
                    <span className="cut-price">Rs.{item.cut_proce}</span>
                    <span className="discount rounded-2xl  items-center ">
                      20% off
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default JustInGrid;
