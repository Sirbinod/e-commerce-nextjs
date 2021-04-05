import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const SellingCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 3000, min: 1536},
      items: 7,
    },
    desktop: {
      breakpoint: {max: 1535, min: 950},
      items: 6,
    },
    laptop: {
      breakpoint: {max: 1220, min: 981},
      items: 5,
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
      img: "/sell1.png",
      title: "Converse All Star",
      price: "Ra. 200 onwards",
      brand: "All Star",
    },
    {
      id: 2,
      img: "/sell2.png",
      title: "Running Shoes",
      price: "Ra. 200 onwards",
      brand: "Xianchonhg",
    },
    {
      id: 3,
      img: "/sell3.png",
      title: "Vans off the hood",
      price: "Ra. 200 onwards",
      brand: "Club Vans",
    },
    {
      id: 4,
      img: "/sell4.png",
      title: "Goldstar Black panter",
      price: "Ra. 200 onwards",
      brand: "Gold Star",
    },
    {
      id: 5,
      img: "/shoes.png",
      title: "Nike Air Jordan",
      price: "Ra. 200 onwards",
      brand: "Nike",
    },
    {
      id: 6,
      img: "/sell6.png",
      title: "Adidas Running Shoes",
      price: "Ra. 200 onwards",
      brand: "Adidas",
    },
    {
      id: 7,
      img: "/sell1.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 8,
      img: "/sell2.png",
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
              className="inline-block best-selling-card bg-white py-2 rounded-xl"
            >
              <div className="relative w-40 h-40 mx-4 rounded-xl">
                <img
                  src={item.img}
                  style={{maxWidth: "150px", maxHeight: "150px"}}
                  alt="product image"
                />
              </div>
              <div className="my-1">
                <h1 className="best-selling-title my-1 ">{item.title}</h1>
                <h3 className=" best-selling-price rounded-2xl py-1 mb-1 mx-6">
                  {item.price}
                </h3>
                <span className="best-selling-brand">{item.brand}</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SellingCarousel;
