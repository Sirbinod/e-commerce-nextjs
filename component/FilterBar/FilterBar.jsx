import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import BrandLogo from "../BrandLogo/BrandLogo";

const FilterBar = (props) => {
  console.log(props);
  return (
    <div>
      {/* side selection with filter product bar */}
      <div className="flex flex-col bg-gray-50 px-5 py-2">
        <div className="flex flex-col border-b py-2 border-gray-300">
          {/* brand section  */}
          <h3 className="text-lg font-semibold">brand</h3>
          <div className="my-2">
            {/* first checkbox with brand name  */}
            <label className="flex items-center ">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
                name="apple"
              />
              <span className="ml-2 text-base font-medium">Apple</span>
            </label>
            {/* end first checkbox  */}
            <label className="flex items-center my-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
              <span className="ml-2 text-base font-medium">Samsung</span>
            </label>

            <label className="flex items-center my-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
              <span className="ml-2 text-base font-medium">HP</span>
            </label>
          </div>
          {/* end brand section  */}
          {/* view more part  */}
          <a href="" className="text-base font-semibold text-blue-400">
            View More
          </a>
        </div>
        {/* price section  */}
        <div className=" mt-3 border-b border-gray-300">
          <h3 className="text-lg font-semibold">Price</h3>
          <div className=" my-3   flex items-center space-x-2 ">
            {/* min range input box */}
            <input
              className=" w-16 h-7 border text-sm border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Min"
            />
            <h5>-</h5>
            {/* max range input box */}
            <input
              className=" w-16 h-7 border text-sm border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Max"
            />
            {/* search button  */}
            <button className="w-7 h-7 rounded-sm py-1.5 px-1.5 bg-blue-600 items-center">
              <BiSearch />
            </button>
          </div>
        </div>
        {/* end price section  */}

        {/* Processer section */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg font-semibold">Processer</h3>
          {/* chack box and Processer name  */}
          <label className="inline-flex items-center mt-3">
            <Link href="/ProductGrid">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
            </Link>
            <span className="ml-2 text-base font-medium">intel</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <Link href="/ProductGrid">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
            </Link>
            <span className="ml-2 text-base font-medium">ADM</span>
          </label>
        </div>
        {/* end Processer section  */}

        {/* screen size section  */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg font-semibold">Screen Size</h3>
          {/* checkbox with name  */}
          <label className="flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <span className="ml-2 text-base font-medium">15 inch</span>
          </label>
          <label className="flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <span className="ml-2 text-base font-medium">14 inch</span>
          </label>
        </div>
        {/* end section  */}

        {/* warrenty period section  */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="text-lg font-semibold">Warrenty Period</h3>
          {/* checkbox with name  */}
          <label className="flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <span className="ml-2 text-base font-medium">yes</span>
          </label>
          <label className="flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600"
            />
            <span className="ml-2 text-base font-medium">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
