import React from "react";
import Image from "next/image";

const CollectionCard = () => {
  const collection = [
    {
      id: 1,
      img: "/fCaro4.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 2,
      img: "/coll1.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 3,
      img: "/call2.png",
      title: "Groceries",
      totle: "100 Products",
    },
    {
      id: 4,
      img: "/call3.png",
      title: "BagPacks",
      totle: "100 Products",
    },
    {
      id: 5,
      img: "/call4.png",
      title: "Makeup Kits",
      totle: "100 Products",
    },
    {
      id: 6,
      img: "/headphone.png",
      title: "health Care",
      totle: "100 Products",
    },
    {
      id: 7,
      img: "/call5.png",
      title: "Clothings",
      totle: "100 Products",
    },
    {
      id: 8,
      img: "/shoes.png",
      title: "Electronics",
      totle: "100 Products",
    },
    {
      id: 9,
      img: "/fCaro5.png",
      title: "Appliances",
      totle: "100 Products",
    },
    {
      id: 10,
      img: "/watch.png",
      title: "Watches",
      totle: "100 Products",
    },
  ];
  return (
    <div>
      {/* create 5 column  */}
      <div className="grid grid-cols-5 gap-3 sm:gap-8 lg:gap-9">
        {collection.map((item) => {
          return (
            // collection card
            <div className=" flex md:w-56 md:h-16 items-center cu">
              <div
                className=" flex collection-logo rounded-2xl lg:rounded-full md:mr-3"
                style={{textAlign: "center"}}
              >
                <img
                  className=""
                  src={item.img}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "inline",
                    padding: "10%",
                    margin: "0 auto",
                  }}
                  alt="collection image"
                />
              </div>
              <div>
                {/* collection product title  */}
                <h1 className=" hidden lg:block collection-title ">
                  {item.title}
                </h1>
                {/* collection product quantity */}
                <h5 className="hidden lg:block md:text-gray-400  md:text-xs">
                  {item.totle}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionCard;
