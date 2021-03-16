import Link from "next/link";
import React from "react";
import {BiSearch} from "react-icons/bi";
const FilterBar = () => {
  return (
    <div>
      <div className="flex flex-col bg-gray-50 px-3 py-2">
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg">brand</h3>
          <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-gray-600"
            />
            <span class="ml-2 text-sm text-gray-700">HP</span>
          </label>
          <a href="" className="text-blue-400">
            View More
          </a>
        </div>
        <div className=" mt-3 border-b border-gray-300">
          <h3>Price</h3>
          <div className=" my-3   flex items-center space-x-2 ">
            <input
              className=" w-11 h-6 border border-gray-400  text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="100"
            />
            <h5>-</h5>
            <input
              className=" w-11 h-6 border border-gray-400  text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="1000"
            />
            <button className="w-6 h-6 py-1 px-1 bg-blue-600 items-center">
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg">Processer</h3>
          <label class="inline-flex items-center mt-3">
            <Link href="/ProductGrid">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-gray-600"
              />
            </Link>
            <span class="ml-2 text-sm text-gray-700">intel</span>
          </label>
        </div>
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg">Screen Size</h3>
          <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-gray-600"
            />
            <span class="ml-2 text-sm text-gray-700">14 inch</span>
          </label>
        </div>
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg">Warrenty Period</h3>
          <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-gray-600"
            />
            <span class="ml-2 text-sm text-gray-700">yes</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
