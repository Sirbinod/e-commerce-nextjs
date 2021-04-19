import React from "react";
import Image from "next/image";

const BrandLogo = () => {
  const logos = [
    {
      id: 1,
      img: "/Brands/brand1.png",
    },
    {
      id: 2,
      img: "/Brands/brand2.png",
    },
    {
      id: 3,
      img: "/Brands/brand3.png",
    },
    {
      id: 4,
      img: "/Brands/brand4.png",
    },
    {
      id: 5,
      img: "/Brands/brand5.png",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center pb-6">
        {/* top brand logo / image mapping  */}
        {logos.map((logo) => {
          return (
            <div
              key={logo.id}
              className="w-48 2xl:w-56 h-20 2xl:h-24 "
              // style={{
              //   display: "grid",
              //   alignContent: "center",
              //   justifyContent: "center",
              // }}
            >
              <img src={logo.img} alt="brand logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandLogo;
