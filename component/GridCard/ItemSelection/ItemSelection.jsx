import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {IoIosStar} from "react-icons/io";
import FilterHeader from "../../FilterHeader/FilterHeader";
import ProductList from "../ProductList/ProductList";

const ItemSelection = ({items}) => {
  const [itemDetails, setitemDetails] = useState(false);
  const onItemDetails = () => {
    setitemDetails(false);
  };
  const offItemDetails = () => {
    setitemDetails(true);
  };
  return (
    <div>
      <div className="mb-4 ">
        <FilterHeader
          onItemsDetail={onItemDetails}
          offItemsDetail={offItemDetails}
        />
        {!itemDetails ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4  gap-2 sm:gap-3">
              {items.map((item) => {
                return (
                  <Link href="/ProductDetail">
                    <div
                      key={item.id}
                      className="inline-block product-grid-card text-center bg-white py-4 cursor-pointer "
                    >
                      <div className="relative w-32 h-28 lg:w-36 lg:h-32 xl:w-40 2xl:w-44 2xl:h-40 xl:h-36 mx-6 lg:mx-3 xl:mx-4 2xl:mx-7  my-3 mb-6">
                        <Image
                          src={item.img}
                          // style={{maxHeight: "180px", maxWidth: "160px"}}
                          layout="fill"
                          objectFit="fill"
                          quality="100"
                          alt="product image"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <h3 className="products-name">{item.title}</h3>
                        <h3 className="products-price py-2">
                          Rs. {item.price}
                        </h3>
                        <div className="flex justify-around  items-center">
                          <span className="block product-cut-price">
                            Rs.{item.cut_proce}
                          </span>
                          <span className="product-discount px-4 rounded-full">
                            20% off
                          </span>
                        </div>
                        <div className="items-center flex px-16 2xl:px-20 mt-2">
                          <IoIosStar size="14" className="star-color" />
                          <IoIosStar size="14" className="star-color" />
                          <IoIosStar size="14" className="star-color" />
                          <IoIosStar size="14" className="star-color-g" />
                          <IoIosStar size="14" className="star-color-g" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <ProductList />
        )}

        <div className="float-right my-3">
          <div className="flex space-x-1.5">
            <button className="w-6 h-6 bg-gray-200 border border-gray-300">
              -
            </button>
            <h4 className="w-6 h-6 text-sm  text-white px-2 py-0.5 border  bg-blue-800 border-blue-800">
              1
            </h4>
            <button className="w-6 h-6 bg-gray-200 border  border-gray-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSelection;
