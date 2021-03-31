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
      {/* create 5 column  */}
      <div className="grid grid-cols-5 gap-3 md:gap-9">
        {collection.map((item) => {
          return (
            // collection card
            <div className=" flex md:w-56 md:h-16 items-center">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-111 rounded-2xl md:rounded-full md:mr-3">
                <div className=" relative w-12 h-12 md:w-12 md:h-12 rounded-full my-2 mx-2 md:my-3 md:mx-3">
                  {/* collection product image  */}
                  <Image src={item.img} layout="fill" objectFit="fill" />
                </div>
              </div>
              <div>
                {/* collection product title  */}
                <h3 className=" hidden md:block md:text-lg md:py-1 md:font-semibold">
                  {item.title}
                </h3>
                {/* collection product quantity */}
                <h5 className="hidden md:block md:text-gray-400  md:text-sm">
                  {item.totle}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionCard;
