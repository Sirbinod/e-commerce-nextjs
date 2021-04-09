// import react, {useState} from "react";
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import BrandLogo from "../BrandLogo/BrandLogo";

const FilterBar = () => {
  // const [chacked, setChacked] = useState([]);
  // const handleToggle = (it) => {
  //   // return the first index or -1
  //   const curBarandId = chacked.indexOf(it);
  //   const newCheckedBrandId = [...chacked];

  //   // if currently chacked was not already in checked state the push
  //   // else pull/take off
  //   if (curBarandId === -1) {
  //     newCheckedBrandId.push(it);
  //   } else {
  //     newCheckedBrandId.splice(curBarandId, 1);
  //   }
  //   console.log(newCheckedBrandId);
  //   // setChacked(newCheckedBrandId);
  // };

  return (
    <div>
      {/* side selection with filter product bar */}
      <div className="flex flex-col bg-white px-5 py-2">
        <div className="flex flex-col border-b py-2 border-gray-300">
          {/* brand section  */}
          <h1 className="filter-brand">brand</h1>
          <div className="my-2">
            {/* first checkbox with brand name  */}
            {/* {items.map((it, i) => { */}
            {/* return ( */}
            <div className="items-center flex space-x-3 my-2">
              <input
                type="checkbox"
                // onChange={handleToggle(it.id)}
                // value={chacked.indexOf(it.id === -1)}
                className="form-checkbox h-4 w-4 cursor-pointer"
              />
              <h1 className="filter-brand-name cursor-pointer">IPhone</h1>
            </div>
            {/* ); */}
            {/* })} */}
            {/* end first checkbox  */}
          </div>
          {/* end brand section  */}

          {/* view more part  */}
          {/* <a href="" className="text-base font-semibold text-blue-400">
            View More
          </a> */}
        </div>
        {/* price section  */}
        <div className=" mt-3 border-b border-gray-300">
          <h1 className="filter-brand">Price</h1>
          <div className=" my-3   flex items-center space-x-2 cursor-pointer">
            {/* min range input box */}
            <input
              className=" w-14 h-7 border text-sm border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Min"
            />
            <h5>-</h5>
            {/* max range input box */}
            <input
              className=" w-14 h-7 border text-sm border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Max"
            />
            {/* search button  */}
            <button className="w-9 h-7 text-white text-xl rounded-sm py-1 px-2 bg-blue-600 items-center">
              <BiSearch />
            </button>
          </div>
        </div>
        {/* end price section  */}

        {/* Processer section */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h1 className="filter-brand">Processer</h1>
          {/* chack box and Processer name  */}
          <div className="flex items-center my-2 space-x-2">
            <Link href="/ProductGrid">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600 cursor-pointer"
              />
            </Link>
            <h1 className="filter-brand-name cursor-pointer">intel</h1>
          </div>
        </div>
        {/* end Processer section  */}

        {/* screen size section  */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="filter-brand">Screen Size</h3>
          {/* checkbox with name  */}
          <div className="flex items-center space-x-2 my-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600 cursor-pointer"
            />
            <h1 className="filter-brand-name cursor-pointer ">15 inch</h1>
          </div>
        </div>
        {/* end section  */}

        {/* warrenty period section  */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="filter-brand">Warrenty Period</h3>
          {/* checkbox with name  */}
          <div className="flex items-center space-x-2 my-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600 cursor-pointer"
            />
            <h1 className="filter-brand-name cursor-pointer">yes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
