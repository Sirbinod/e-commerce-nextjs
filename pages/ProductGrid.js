import FilterBar from "../component/FilterBar/FilterBar";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import ProductList from "../component/GridCard/ProductList/ProductList";
import ProductSelectionHeader from "../component/ProductSelectionHeader/ProductSelectionHeader";
export default function ProductGrid() {
  return (
    <>
      <section className="bg-white sticky top-24 z-10">
        <MegaMenu />
      </section>
      <section>
        <div className="my-5">
          <div className="container mx-auto">
            <ProductSelectionHeader />
            <div className="flex lg:space-x-7">
              <div className="hidden lg:block w-56">
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
