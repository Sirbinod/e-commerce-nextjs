import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  ];
  return (
    <div>
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
                className="inline-block w-48 mx-2 text-center hover:shadow-3xl bg-gray-50 py-4"
              >
                <Link href="/ProductDetail">
                  <div className="relative w-48 h-48 mx-5 my-3">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      alt="product image"
                    />
                  </div>
                </Link>
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
  );
};

export default ItemSelection;
