import React from "react";
import Image from "next/image";

const CardChanel = () => {
  const array = [
    {
      id: 1,
      img: "ChanelImage/km.png",
      title: "Ktm Mall",
    },
    {
      id: 2,
      img: "ChanelImage/up.png",
      title: "TopUp",
    },
    {
      id: 3,
      img: "ChanelImage/tickets.png",
      title: "Movie Ticket",
    },
    {
      id: 4,
      img: "ChanelImage/airplane.png",
      title: "Flight",
    },
    {
      id: 5,
      img: "ChanelImage/bus.png",
      title: "Bus",
    },
    {
      id: 6,
      img: "ChanelImage/wifi.png",
      title: "Internet",
    },
    {
      id: 7,
      img: "ChanelImage/idea.png",
      title: "Electricity",
    },
    {
      id: 8,
      img: "ChanelImage/television.png",
      title: "TV",
    },
    {
      id: 9,
      img: "ChanelImage/hotel.png",
      title: "Hotel",
    },
    {
      id: 10,
      img: "ChanelImage/Group.png",
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
                className="block text-center  md:flex sm:px-2 sm:h-12   lg:h-10  channelcard lg:bg-white rounded-3xl items-center md:hover:bg-red-500 md:hover:text-white cursor-pointer"
              >
                <div className="w-7 h-7 flex mx-5 mb-2 sm:mx-0 xm:mb-0 sm:my-0.5 lg:my-0 justify-center text-center">
                  {/* card Image */}
                  <img
                    src={item.img}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    alt="chanel card"
                  />
                </div>
                {/* card title */}
                <h3 className="chanel-title sm:px-3 pt-0 xl:pt-1 2xl:pt-0">
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
