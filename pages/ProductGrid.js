import FilterBar from "../component/FilterBar/FilterBar";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import ProductList from "../component/ProductList/ProductList";

export default function ProductGrid() {
  return (
    <>
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
              <div className="w-1/4">
                <FilterBar />
              </div>
              <ProductList />
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
    </>
  );
}
