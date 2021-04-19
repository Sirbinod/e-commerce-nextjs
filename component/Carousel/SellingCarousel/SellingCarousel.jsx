import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const SellingCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1220},
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
      img: "/BestSelling/Sel1.png",
      title: "Converse All Star",
      price: "Ra. 200 onwards",
      brand: "All Star",
    },
    {
      id: 2,
      img: "/BestSelling/Sel2.png",
      title: "Running Shoes",
      price: "Ra. 200 onwards",
      brand: "Xianchonhg",
    },
    {
      id: 3,
      img: "/BestSelling/Sel3.png",
      title: "Vans off the hood",
      price: "Ra. 200 onwards",
      brand: "Club Vans",
    },
    {
      id: 4,
      img: "/BestSelling/Sel4.png",
      title: "Goldstar Black panter",
      price: "Ra. 200 onwards",
      brand: "Gold Star",
    },
    {
      id: 5,
      img: "/BestSelling/Sel5.png",
      title: "Nike Air Jordan",
      price: "Ra. 200 onwards",
      brand: "Nike",
    },
    {
      id: 6,
      img: "/BestSelling/Sel6.png",
      title: "Adidas Running Shoes",
      price: "Ra. 200 onwards",
      brand: "Adidas",
    },
    {
      id: 7,
      img: "/BestSelling/Sel1.png",
      title: "Gold Star",
      price: "Ra. 200 onwards",
      brand: "Brand",
    },
    {
      id: 8,
      img: "/BestSelling/Sel2.png",
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
            <Link href="/ProductDetail">
              <div
                key={item.id}
                className="inline-block best-selling-card bg-white py-2 my-1"
              >
                <div className="relative w-40 h-40 mx-1.5  mb-5 rounded-xl">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    // style={{maxWidth: "150px", maxHeight: "150px"}}
                    alt="product image"
                  />
                </div>
                <div className="my-1">
                  <h1 className="best-selling-title my-1 ">{item.title}</h1>
                  <h3 className=" best-selling-price rounded-2xl py-1 my-2 mx-7">
                    {item.price}
                  </h3>
                  <span className="best-selling-brand">{item.brand}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SellingCarousel;
