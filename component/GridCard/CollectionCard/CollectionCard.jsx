import React from "react";
import Image from "next/image";

const CollectionCard = () => {
  const collection = [
    {
      id: 1,
      img: "/Collection/Coll1.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 2,
      img: "/Collection/Coll2.png",
      title: "Mobile Phone",
      totle: "100 Products",
    },
    {
      id: 3,
      img: "/Collection/Coll3.png",
      title: "Groceries",
      totle: "100 Products",
    },
    {
      id: 4,
      img: "/Collection/Coll4.png",
      title: "BagPacks",
      totle: "100 Products",
    },
    {
      id: 5,
      img: "/Collection/Coll5.png",
      title: "Makeup Kits",
      totle: "100 Products",
    },
    {
      id: 6,
      img: "/Collection/Coll6.png",
      title: "health Care",
      totle: "100 Products",
    },
    {
      id: 7,
      img: "/Collection/Coll7.png",
      title: "Clothings",
      totle: "100 Products",
    },
    {
      id: 8,
      img: "/Collection/Coll8.png",
      title: "Electronics",
      totle: "100 Products",
    },
    {
      id: 9,
      img: "/Collection/Coll9.png",
      title: "Appliances",
      totle: "100 Products",
    },
    {
      id: 10,
      img: "/Collection/Coll10.png",
      title: "Watches",
      totle: "100 Products",
    },
  ];
  return (
    <div>
      {/* create 5 column  */}
      <div className="grid grid-cols-5 gap-3 sm:gap-8 lg:gap-3">
        {collection.map((item) => {
          return (
            // collection card
            <div className="flex md:w-52 md:h-16 items-center cursor-pointer">
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
                <div className="flex items-center justify-between w-28 ">
                  <h1 className=" hidden lg:block collection-title ">
                    {item.title}
                  </h1>
                  <img
                    src="/Coll-icon.png"
                    style={{width: "6px", height: "8px"}}
                  />
                </div>
                {/* collection product quantity */}
                <h5 className="hidden lg:block md:text-gray-400 py-0.5 md:text-xs ">
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
