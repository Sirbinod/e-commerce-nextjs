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
        {/* create 5 column  */}
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {/* make chenal card  */}
          {array.map((item, i) => {
            return (
              <div
                key={i}
                className="block text-center md:flex  lg:w-44 xl:w-56 xl:h-11 lg:bg-white-100 rounded-3xl items-center md:hover:bg-red-555 md:hover:text-white-100 hove:shadow-2xl"
              >
                <div className="mb-2 mx-2 sm:mx-1 lg:mx-2 md:m-2.5">
                  {/* card Image */}
                  <img
                    src={item.img}
                    className="max-w-7.2 max-h-7.2"
                    alt="chanel card"
                  />
                </div>
                {/* card title */}
                <h3 className=" text-xl leading-5 font-semibold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardChanel;
