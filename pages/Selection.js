import React, {useState} from "react";
import FilterBar from "../component/FilterBar/FilterBar";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import ItemSelection from "../component/ItemSelection/ItemSelection";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import dynamic from "next/dynamic";

export const DynamicComponentWithNoSSR = dynamic(
  () => import("../component/ProductList/ProductList"),
  {
    ssr: false,
  }
);

export default function Selection() {
  const [brand, setBrand] = useState({
    apple: false,
  });

  const filterHandler = ({target: {name, checked}}) => {
    setBrand({
      [name]: checked,
    });
  };

  return (
    <div className="bg-gray-100">
      <section>
        <Header />
      </section>
      <section>
        <MegaMenu />
      </section>
      <section>
        <div className="my-5">
          <div className="container mx-auto">
            <div className="flex space-x-2">
              <h3>Electric </h3>
              <h3>Computer</h3>
            </div>
            <div className="flex space-x-7">
              <div className="w-56">
                <FilterBar brand={brand} filterHandler={filterHandler} />
              </div>
              <ItemSelection hello="adsasd" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-300">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
