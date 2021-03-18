import FilterBar from "../component/FilterBar/FilterBar";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import ItemSelection from "../component/ItemSelection/ItemSelection";
import MegaMenu from "../component/MegaMenu/MegaMenu";

export default function Selection() {
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
                <FilterBar />
              </div>
              <ItemSelection />
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
