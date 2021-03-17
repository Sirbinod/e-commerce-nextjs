import React from "react";
import Image from "next/image";

const CollectionCard = () => {
  const collection = [
    {
      id: 1,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 2,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 3,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 4,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 5,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 6,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 7,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 8,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 9,
      img: "/headphone.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 10,
      img: "/headphone.png",
      title: "Mobile Phone",
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
                <div className=" relative w-16 h-16 rounded-full my-1 mx-1">
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
