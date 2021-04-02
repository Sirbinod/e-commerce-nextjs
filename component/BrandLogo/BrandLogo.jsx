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
        {/* top brand logo / image mapping  */}
        {logos.map((logo) => {
          return (
            <div key={logo.id}>
              <img
                src={logo.img}
                style={{maxWidth: "80", maxHeight: "40"}}
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
