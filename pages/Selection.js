import React, {useState, useEffect} from "react";
import FilterBar from "../component/FilterBar/FilterBar";

import MegaMenu from "../component/MegaMenu/MegaMenu";
import {useRouter} from "next/router";
import ProductSelectionHeader from "../component/ProductSelectionHeader/ProductSelectionHeader";
import ItemSelection from "../component/GridCard/ItemSelection/ItemSelection";

export default function Selection() {
  const router = useRouter;

  const brand = [
    {id: 1, name: "iphone"},
    {id: 2, name: "Samsung"},
    {id: 3, name: "Opp"},
  ];
  const processer = [
    {id: 1, name: "i5"},
    {id: 2, name: "i7"},
    {id: 3, name: "i9"},
  ];

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
                  <FilterBar brand={brand} />
                </ul>
              </div>

              <ItemSelection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
