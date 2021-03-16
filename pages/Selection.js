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
        <div className="container mx-auto">
          <ItemSelection />
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
