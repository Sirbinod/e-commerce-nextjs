import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import Link from "next/link";

const CarouselItem = () => {
  const responsive = {
    largedesktop: {
      breakpoint: {max: 1500, min: 1280},
      items: 6,
    },
    desktop: {
      breakpoint: {max: 1500, min: 1280},
      items: 6,
    },
    laptop: {
      breakpoint: {max: 1280, min: 1024},
      items: 5,
    },
    tablet: {
      breakpoint: {max: 1024, min: 700},
      items: 3,
    },
    mobie: {
      breakpoint: {max: 700, min: 464},
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
              className="inline-block w-46 text-center bg-white-100 py-4 rounded-lg hover:shadow-3xl"
            >
              <Link href="/ProductDetail">
                <div className=" mx-4 w-40 h-40 my-1">
                  {/* item Image */}
                  <img
                    src={item.img}
                    alt="product image"
                    style={{maxWidth: "150px", maxHeight: "150px"}}
                  />
                </div>
              </Link>
              <div className="mt-2">
                {/* item title */}
                <h3 className="text-xl-1 font-medium leading-7 font-sans">
                  {item.title}
                </h3>
                {/* item Price */}
                <h3 className="text-xl-3 font-semibold leading-7 text-red-666">
                  Rs. {item.price}
                </h3>
                {/* rating star */}
                <div className="flex mx-16 space-x-0.5">
                  <AiFillStar
                    style={{width: "23px", height: "25px", color: "yellow"}}
                  />
                  <AiFillStar
                    style={{width: "23px", height: "25px", color: "yellow"}}
                  />
                  <AiFillStar
                    style={{width: "23px", height: "25px", color: "yellow"}}
                  />
                  <AiFillStar style={{width: "23px", height: "25px"}} />
                  <AiFillStar style={{width: "23px", height: "25px"}} />
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
