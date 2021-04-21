import React, {useState} from "react";

import FilterHeader from "../../FilterHeader/FilterHeader";
import ProductList from "../ProductList/ProductList";
import ProductGrid from "../ProductGrid/ProductGrid";

const ItemSelection = () => {
  const [itemDetails, setitemDetails] = useState(false);
  const onItemDetails = () => {
    setitemDetails(false);
  };
  const offItemDetails = () => {
    setitemDetails(true);
  };
  const items = [
    {
      id: 1,
      img: "/selec1.png",
      title: "Dell Inspiron 15",
      price: "200",
      catagory: "phone",
      cut_proce: "222 ",
      brand: {
        id: 1,
        name: "apple",
      },
    },
    {
      id: 2,
      img: "/selec2.png",
      title: "ACER ASPIRE 5",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 2,
        name: "dell",
      },
    },
    {
      id: 3,
      img: "/selec3.png",
      title: "Lenovo IdeaPad 3",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 1,
        name: "apple",
      },
    },
    {
      id: 4,
      img: "/selec4.png",
      title: "ACER ASPIRE 5",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 2,
        name: "dell",
      },
    },
    {
      id: 5,
      img: "/selec5.png",
      title: "Dell Inspiron 15",
      price: "200",
      catagory: "phone",
      cut_proce: "20",
      brand: {
        id: 1,
        name: "apple",
      },
    },
    {
      id: 6,
      img: "/selec6.png",
      title: "ACER ASPIRE 5",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 2,
        name: "dell",
      },
    },
    {
      id: 7,
      img: "/selec1.png",
      title: "Lenovo IdeaPad 3",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 2,
        name: "dell",
      },
    },
    {
      id: 8,
      img: "/selec2.png",
      title: "ACER ASPIRE 5",
      price: "200",
      catagory: "phone",
      cut_proce: "222",
      brand: {
        id: 1,
        name: "apple",
      },
    },
  ];
  return (
    <div>
      <div className="mb-4 ">
        <FilterHeader
          onItemsDetail={onItemDetails}
          offItemsDetail={offItemDetails}
        />
        {!itemDetails ? (
          <ProductGrid items={items} />
        ) : (
          <ProductList items={items} />
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
