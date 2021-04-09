import FilterBar from "../component/FilterBar/FilterBar";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import ProductList from "../component/ProductList/ProductList";

export default function ProductGrid() {
  return (
    <>
      <section className="bg-white sticky top-24 z-10">
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
                <FilterBar />
              </div>
              <ProductList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
