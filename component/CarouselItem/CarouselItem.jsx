import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";

const CarouselItem = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 3000, min: 2000},
      items: 7,
    },
    desktop: {
      breakpoint: {max: 2000, min: 950},
      items: 6,
    },
    tablet: {
      breakpoint: {max: 950, min: 464},
      items: 3,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 2,
    },
  };
  const items = [
    {
      id: 1,
      img: "/phone.png",
      title: "Go Pro",
      price: "200",
    },
    {
      id: 2,
      img: "/phone.png",
      title: "Makeup",
      price: "200",
    },
    {
      id: 3,
      img: "/phone.png",
      title: "Refrigerator",
      price: "200",
    },
    {
      id: 4,
      img: "/phone.png",
      title: "Watch",
      price: "200",
    },
    {
      id: 5,
      img: "/phone.png",
      title: "Mobile",
      price: "200",
    },
    {
      id: 6,
      img: "/phone.png",
      title: "Laptop",
      price: "200",
    },
    {
      id: 7,
      img: "/phone.png",
      title: "Realme",
      price: "200",
    },
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block w-48 text-center bg-white py-4"
            >
              <div className="relative w-40 h-40 mx-4 my-2">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="fill"
                  alt="product image"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-xl">{item.title}</h3>
                <h3 className="text-xl text-red-700">Rs. {item.price}</h3>
                <span className="block"> 11110</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
