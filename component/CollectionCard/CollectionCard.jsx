import React from "react";
import Image from "next/image";

const CollectionCard = () => {
  const collection = [
    {
      id: 1,
      img: "/fCaro4.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 2,
      img: "/coll1.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 3,
      img: "/call2.png",
      title: "Groceries",
      totle: "100 Products",
    },
    {
      id: 4,
      img: "/call3.png",
      title: "BagPacks",
      totle: "100 Products",
    },
    {
      id: 5,
      img: "/call4.png",
      title: "Makeup Kits",
      totle: "100 Products",
    },
    {
      id: 6,
      img: "/headphone.png",
      title: "health Care",
      totle: "100 Products",
    },
    {
      id: 7,
      img: "/call5.png",
      title: "Clothings",
      totle: "100 Products",
    },
    {
      id: 8,
      img: "/shoes.png",
      title: "Electronics",
      totle: "100 Products",
    },
    {
      id: 9,
      img: "/fCaro5.png",
      title: "Appliances",
      totle: "100 Products",
    },
    {
      id: 10,
      img: "/watch.png",
      title: "Watches",
      totle: "100 Products",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 gap-9">
        {collection.map((item) => {
          return (
            <div className=" flex w-56 h-16 items-center">
              <div className="w-18 h-18 bg-gray-300 rounded-full mr-3">
                <div className=" relative w-12 h-12 rounded-full my-3 mx-3">
                  <Image src={item.img} layout="fill" objectFit="fill" />
                </div>
              </div>
              <div>
                <h3 className=" text-lg py-1 font-semibold">{item.title}</h3>

                <h5 className="text-gray-400  text-sm">{item.totle}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionCard;
