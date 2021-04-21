import Link from "next/link";
import React from "react";
import Image from "next/image";
import {IoIosStar} from "react-icons/io";
import FilterHeader from "../../FilterHeader/FilterHeader";

const ProductList = ({items}) => {
  return (
    <div className="mb-4 ">
      <div className="grid grid-cols-1">
        {items.map((item) => {
          return (
            <Link href="/ProductDetail">
              <div
                key={item.id}
                className=" product-list border flex bg-white border-b border-gray-200 "
              >
                <div className="flex lg:space-x-2 items-center">
                  <div className="product-list-img cursor-pointer relative mx-3 lg:mx-6 sm:mt-1.5">
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                      alt="product Image"
                    />
                  </div>
                  <div className="sm:flex product-list-len justify-between">
                    <div className="sm:my-3 lg:pl-2">
                      <h2 className="products-name my-1 cursor-pointer">
                        {item.title}
                      </h2>
                      <h2 className="products-price my-1 py-1">
                        Rs. {item.price}
                      </h2>
                      <h3 className=" product-cut-price my-1 mb-2">
                        Rs. {item.cut_proce}
                      </h3>
                      <h2 className=" product-discount w-20 rounded-2xl text-center">
                        20% off
                      </h2>
                    </div>
                    <div className="flex  sm:mt-3 mr-5">
                      <IoIosStar size="15" className="star-color" />
                      <IoIosStar size="15" className="star-color" />
                      <IoIosStar size="15" className="star-color" />
                      <IoIosStar size="15" className="star-color-g" />
                      <IoIosStar size="15" className="star-color-g" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
