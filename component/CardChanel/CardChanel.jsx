import React from "react";
import Image from "next/image";

const CardChanel = () => {
  const array = [
    {
      id: 1,
      img: "/chanelcard.svg",
      title: "Ktm Mall",
    },
    {
      id: 2,
      img: "/chanelcard.svg",
      title: "TopUp",
    },
    {
      id: 3,
      img: "/chanelcard.svg",
      title: "Movie Ticket",
    },
    {
      id: 4,
      img: "/chanelcard.svg",
      title: "Flight",
    },
    {
      id: 5,
      img: "/chanelcard.svg",
      title: "Internet",
    },
    {
      id: 6,
      img: "/chanelcard.svg",
      title: "Bus",
    },
    {
      id: 7,
      img: "/chanelcard.svg",
      title: "Hotel",
    },
    {
      id: 8,
      img: "/chanelcard.svg",
      title: "Electric",
    },
    {
      id: 9,
      img: "/chanelcard.svg",
      title: "Electric",
    },
    {
      id: 10,
      img: "/chanelcard.svg",
      title: "Electric",
    },
  ];
  return (
    <div className="my-7">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          {array.map((item) => {
            return (
              <div className=" flex w-56 h-12 bg-white rounded-3xl items-center hover:bg-red-400 hove:shadow-2xl">
                <div className=" relative w-8 h-8 rounded-full mx-3 ">
                  <Image src={item.img} layout="fill" objectFit="fill" />
                </div>
                <h3 className="text-base font-medium">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardChanel;
