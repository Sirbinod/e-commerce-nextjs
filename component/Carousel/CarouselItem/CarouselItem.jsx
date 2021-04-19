import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";
import {IoIosStar} from "react-icons/io";
import Link from "next/link";

const CarouselItem = () => {
  const responsive = {
    desktop: {
      breakpoint: {max: 2000, min: 1280},
      items: 6,
    },
    tablet: {
      breakpoint: {max: 1024, min: 500},
      items: 4,
    },
    min: {
      breakpoint: {max: 500, min: 200},
      items: 2,
    },
  };
  const items = [
    {
      id: 1,
      img: "/CarouselItem/gopro.png",
      title: "GoPro Hero",
      price: "200",
    },
    {
      id: 2,
      img: "/CarouselItem/makeup.png",
      title: "Makeup Kit",
      price: "200",
    },
    {
      id: 3,
      img: "/CarouselItem/watch.png",
      title: "ultra Series Watch",
      price: "200",
    },
    {
      id: 4,
      img: "/CarouselItem/mobile.png",
      title: "Huwaei Nova",
      price: "200",
    },
    {
      id: 5,
      img: "/CarouselItem/ref.png",
      title: "Samsung Refrigerator",
      price: "200",
    },
    {
      id: 6,
      img: "/CarouselItem/tv.png",
      title: "Hp Pavilion",
      price: "200",
    },
    {
      id: 7,
      img: "/CarouselItem/gopro.png",
      title: "Realme",
      price: "200",
    },
    {
      id: 8,
      img: "/CarouselItem/watch.png",
      title: "Realme",
      price: "200",
    },
  ];
  return (
    <div>
      {/* item card slider */}
      <Carousel responsive={responsive}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block card-item bg-white py-4 my-1 "
            >
              <Link href="/ProductDetail">
                <div className=" mx-3 2xl:mx-4 h-40 2xl:w-44 2xl:h-44 w-40 my-1">
                  {/* item Image */}
                  <img
                    src={item.img}
                    style={{maxHeight: "90%", maxWidth: "90%"}}
                    alt="product image"
                  />
                </div>
              </Link>
              <div className="mt-1">
                {/* item title */}
                <h3 className="card-item-title">{item.title}</h3>
                {/* item Price */}
                <h3 className="card-item-price py-1">Rs. {item.price}</h3>
                {/* rating star */}
                <div className="stars">
                  <IoIosStar size="13" className="star-color" />
                  <IoIosStar size="13" className="star-color" />
                  <IoIosStar size="13" className="star-color" />
                  <IoIosStar size="13" className="star-color-g" />
                  <IoIosStar size="13" className="star-color-g" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
