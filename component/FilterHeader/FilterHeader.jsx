import React, {useState} from "react";
import {BsFillGridFill} from "react-icons/bs";
import {FaList} from "react-icons/fa";
import Link from "next/link";
import ItemSelection from "../GridCard/ItemSelection/ItemSelection";
import ProductList from "../GridCard/ProductList/ProductList";

const FilterHeader = ({onItemsDetail, offItemsDetail}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center fiter-header mb-3 justify-between">
        <h1 className="text-base hidden lg:flex">Computers</h1>
        <div className="flex items-center space-x-8 sm:space-x-96 lg:space-x-0">
          <div className="flex items-center mr-3">
            <h3 className=" text-xs">Sort by</h3>
            <select className="w-32  bg-white px-2 h-7 mx-5 text-xs  lg:mr-0 border-gray-400 border">
              <option>Best Match</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
          </div>
          <div className="flex items-center">
            <h3 className="text-xs mx-2">View</h3>

            <BsFillGridFill
              onClick={() => onItemsDetail()}
              className="w-6 h-6 text-gray-500 mx-2 "
            />
            <FaList
              className="w-6 h-6 text-gray-500 "
              onClick={() => offItemsDetail()}
            />
            {/* {show ? <div> This is first COmponent </div> : <ProductList />} */}

            {/* <Link href="/ProductGrid">
              <FaList className="w-6 h-6 text-gray-500 " />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
