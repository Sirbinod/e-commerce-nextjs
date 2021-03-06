import React from "react";
import Image from "next/image";

const Info = () => {
  const infos = [
    {
      id: 1,
      img: "/info1.png",
      title: "Free Delivery",
      sub: "On all Orders above Rs 5000",
    },
    {
      id: 2,
      img: "/info2.png",
      title: "Secure Payment",
      sub: "On all Orders above Rs 5000",
    },
    {
      id: 3,
      img: "/info3.png",
      title: "Customer Service",
      sub: "We are there to help you",
    },
  ];
  return (
    <div className=" py-5">
      <div className="flex pb-3 justify-between items-center">
        {infos.map((info) => {
          return (
            <div className="flex items-center">
              <div className="w-14 h-14 relative mr-3">
                <img
                  src={info.img}
                  style={{maxHeight: "50px", maxWidth: "50"}}
                  alt="info icon"
                />
              </div>
              <div className=" items-center">
                <h3 className=" text-base font-meduim">{info.title}</h3>
                <h4 className="text-sm text-gray-400">{info.sub}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
