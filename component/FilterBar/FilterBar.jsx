import react, {useState} from "react";
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import BrandLogo from "../BrandLogo/BrandLogo";

const FilterBar = ({brand}) => {
  const [chacked, setChacked] = useState([]);

  const handleToggle = (cat) => () => {
    const currentbrandId = chacked.indexOf(cat);
    const newChackedBrandId = [...chacked];
    if (currentbrandId === -1) {
      newChackedBrandId.push(cat);
    } else {
      newChackedBrandId.splice(currentbrandId, 1);
    }
    console.log(newChackedBrandId);
    setChacked(newChackedBrandId);
  };

  return (
    <div>
      {/* side selection with filter product bar */}
      <div className="flex flex-col bg-white px-5 py-2">
        <div className="flex flex-col border-b py-2 border-gray-300">
          {/* brand section  */}
          <h1 className="filter-brand">brand</h1>
          {brand.map((cat) => {
            return (
              <div className="items-center my-1 flex space-x-3">
                <input
                  onChange={handleToggle(cat.id)}
                  value={chacked.indexOf(cat.id === -1)}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 cursor-pointer"
                />
                <h1 className="filter-brand-name cursor-pointer">{cat.name}</h1>
              </div>
            );
          })}
          <div className="my-1">{/* end first checkbox  */}</div>
          {/* end brand section  */}
        </div>
        {/* price section  */}
        <div className=" mt-3 border-b border-gray-300">
          <h1 className="filter-brand">Price</h1>
          <div className=" my-1 mb-4   flex items-center space-x-2 cursor-pointer">
            {/* min range input box */}
            <input
              className=" w-14 h-6 border text-xs border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Min"
            />
            <h5>-</h5>
            {/* max range input box */}
            <input
              className=" w-14 h-6 border text-xs border-gray-400 rounded-sm px-1 text-gray-700  focus:outline-none"
              id="search"
              type="text"
              placeholder="Max"
            />
            {/* search button  */}
            <button className="w-6 h-6 text-white text-base rounded-sm px-1 bg-blue-600 items-center">
              <BiSearch />
            </button>
          </div>
        </div>
        {/* end price section  */}

        {/* Processer section */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h1 className="filter-brand">Processer</h1>
          {/* chack box and Processer name  */}
          <div className="flex items-center my-1 space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-gray-600 cursor-pointer"
            />

            <h1 className="filter-brand-name cursor-pointer">intel</h1>
          </div>
        </div>
        {/* end Processer section  */}

        {/* screen size section  */}
        <div className="flex flex-col border-b py-2 border-gray-300">
          <h3 className="filter-brand">Screen Size</h3>
          {/* checkbox with name  */}
          <div className="flex items-center space-x-2 my-1">
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
          <div className="flex items-center space-x-2 my-1">
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
