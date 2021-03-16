import React from "react";
import Image from "next/image";

const BrandLogo = () => {
  const logos = [
    {
      id: 1,
      img: "/brand1.png",
    },
    {
      id: 2,
      img: "/brand2.png",
    },
    {
      id: 3,
      img: "/brand3.png",
    },
    {
      id: 4,
      img: "/brand4.png",
    },
    {
      id: 5,
      img: "/brand5.png",
    },
  ];
  return (
    <div>
      <div className="flex justify-around items-center">
        {logos.map((logo) => {
          return (
            <div key={logo.id} className="w-16 h-8 relative">
              <Image
                src={logo.img}
                layout="fill"
                objectFit="fill"
                alt="brand logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandLogo;
