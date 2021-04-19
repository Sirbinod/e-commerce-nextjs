import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const MaybeLikeCarousel = () => {
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
      img: "/JustIn/justin1.png",
      title: "New XOVO mobile",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 2,
      img: "/JustIn/justin2.png",
      title: "Sun Glass",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 3,
      img: "/JustIn/justin3.png",
      title: "Refrigerator",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 4,
      img: "/JustIn/justin4.png",
      title: "Headphone",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 5,
      img: "/JustIn/justin5.png",
      title: "Bag Pack",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 6,
      img: "/JustIn/justin6.png",
      title: "New Watch",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 7,
      img: "/JustIn/justin7.png",
      title: "Real Shoes",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 8,
      img: "/JustIn/justin8.png",
      title: "Red Jecket",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
    {
      id: 9,
      img: "/JustIn/justin9.png",
      title: "New Camera",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
    },
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="inline-block  text-center maybelike-card rounded-xl cursor-pointer"
            >
              <div className="relative w-36 h-36  mx-3 my-2">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="fill"
                  alt="product image"
                  quality="100"
                />
              </div>
              <div className="mt-2">
                <h3 className="maybelike-title">{item.title}</h3>
                {/* <h3 className="text-lg font-medium">{item.catagory}</h3> */}
                <h3 className="maybelike-price my-2">Rs. {item.price}</h3>
                <div className="flex justify-around my-2 pb-3 items-center">
                  <span className="block meybelike-cut-price ">
                    Rs.{item.cut_proce}
                  </span>
                  <span className="rounded-2xl items-center maybelike-discount">
                    20% off
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MaybeLikeCarousel;
