import React from "react";
import Image from "next/image";

const CardChanel = () => {
  const array = [
    {
      id: 1,
      img: "/chanel1.png",
      title: "Ktm Mall",
    },
    {
      id: 2,
      img: "/chanel2.png",
      title: "TopUp",
    },
    {
      id: 3,
      img: "/chanel3.png",
      title: "Movie Ticket",
    },
    {
      id: 4,
      img: "/chanel4.png",
      title: "Flight",
    },
    {
      id: 5,
      img: "/chanel5.png",
      title: "Bus",
    },
    {
      id: 6,
      img: "/chanel6.png",
      title: "Internet",
    },
    {
      id: 7,
      img: "/chanel7.png",
      title: "Electricity",
    },
    {
      id: 8,
      img: "/chanel8.png",
      title: "TV",
    },
    {
      id: 9,
      img: "/chanel9.png",
      title: "Hotel",
    },
    {
      id: 10,
      img: "/chanel10.png",
      title: "More",
    },
  ];
  return (
    <div className="my-7">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          {array.map((item) => {
            return (
              <div className=" flex w-56 h-12 bg-white rounded-3xl items-center hover:bg-red-400 hove:shadow-2xl">
                <div className=" relative w-8 h-8  mx-3.5">
                  <Image src={item.img} layout="fill" objectFit="fill" />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardChanel;
