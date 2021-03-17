import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const SellingCarousel = () => {
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
  const array = [
    {
      id: 1,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 2,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 3,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 4,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 5,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 6,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 7,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 8,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 9,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 10,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 11,
      img: "/shoes.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        {array.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block w-48 text-center bg-white py-4 rounded-xl hover:shadow-3xl  "
            >
              <div className="relative w-40 h-40 mx-4 my-2 rounded-xl">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="cover"
                  alt="product image"
                />
              </div>
              <div className="mt-1">
                <h3 className="text-lg font-normal">{item.title}</h3>
                <h3 className="border rounded-2xl w-36 mx-6 border-green-500 text-base font-medium text-green-500">
                  {item.price}
                </h3>
                <span className="block text-gray-600">{item.brand}</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SellingCarousel;
