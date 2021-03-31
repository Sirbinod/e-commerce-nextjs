import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import Link from "next/link";

const CarouselItem = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 3000, min: 1536},
      items: 7,
    },
    desktop: {
      breakpoint: {max: 1535, min: 1221},
      items: 6,
    },
    laptop: {
      breakpoint: {max: 1220, min: 981},
      items: 5,
    },
    tablet: {
      breakpoint: {max: 980, min: 591},
      items: 3,
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
      <Carousel responsive={responsive} renderButtonGroupOutside={true}>
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
                <h3 className="text-base font-semibold font-sans">
                  {item.title}
                </h3>
                {/* item Price */}
                <h3 className="text-lg font-semibold text-red-666">
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
