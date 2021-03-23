import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";

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
      breakpoint: {max: 950, min: 591},
      items: 4,
    },
    mobile: {
      breakpoint: {max: 590, min: 0},
      items: 2,
    },
  };
  const items = [
    {
      id: 1,
      img: "/fCaro1.png",
      title: "GoPro Hero",
      price: "200",
    },
    {
      id: 2,
      img: "/fCaro2.png",
      title: "Makeup Kit",
      price: "200",
    },
    {
      id: 3,
      img: "/fCaro3.png",
      title: "ultra Series Watch",
      price: "200",
    },
    {
      id: 4,
      img: "/fCaro4.png",
      title: "Huwaei Nova",
      price: "200",
    },
    {
      id: 5,
      img: "/fCaro5.png",
      title: "Samsung Refrigerator",
      price: "200",
    },
    {
      id: 6,
      img: "/fCaro6.png",
      title: "Hp Pavilion",
      price: "200",
    },
    {
      id: 7,
      img: "/fCaro1.png",
      title: "Realme",
      price: "200",
    },
    {
      id: 7,
      img: "/fCaro2.png",
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
              className="inline-block w-48 text-center bg-white py-4 rounded-lg hover:shadow-3xl"
            >
              <div className="relative w-40 h-40 mx-4 my-1">
                {/* item Image */}
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="fill"
                  alt="product image"
                />
              </div>
              <div className="mt-2">
                {/* item title */}
                <h3 className="text-base font-semibold">{item.title}</h3>
                {/* item Price */}
                <h3 className="text-lg font-semibold text-red-700">
                  Rs. {item.price}
                </h3>
                {/* rating star */}
                <div className="flex mx-16">
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar style={{color: "yellow"}} />
                  <AiFillStar />
                  <AiFillStar />
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
