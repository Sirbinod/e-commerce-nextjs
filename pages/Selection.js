import React, {useState, useEffect} from "react";
import FilterBar from "../component/FilterBar/FilterBar";

import MegaMenu from "../component/MegaMenu/MegaMenu";
import {useRouter} from "next/router";
import ProductSelectionHeader from "../component/ProductSelectionHeader/ProductSelectionHeader";
import ItemSelection from "../component/GridCard/ItemSelection/ItemSelection";

export default function Selection() {
  const router = useRouter;
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
  // const [data, setData] = useState([]);
  // const initData = () => {
  //   items().then((item) => {
  //     setData(item);
  //   });
  // };
  // console.log(data);
  // useEffect(() => {
  //   initData();
  // }, []);
  return (
    <div className="bg-gray-100">
      <section className="w-full bg-white sticky top-24 z-10">
        <MegaMenu />
      </section>
      <section>
        <div className="my-5">
          <div className="container mx-auto">
            <ProductSelectionHeader />
            <div className="flex space-x-0 lg:space-x-7">
              <div className=" hidden lg:block lg:w-56">
                <ul>
                  <FilterBar items={items} />
                </ul>
              </div>

              <ItemSelection items={items} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
