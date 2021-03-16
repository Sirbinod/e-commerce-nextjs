import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import Product from "../component/Product/Product";
import RatingReview from "../component/RatingReview/RatingReview";
import SellingCarousel from "../component/SellingCarousel/SellingCarousel";

export default function ProductDetail() {
  return (
    <div className="bg-gray-5   0">
      <section>
        <Header />
      </section>
      <section>
        <MegaMenu />
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex space-x-3 items-center my-2">
            <h3>Electric =</h3>
            <h3>Computer</h3>
          </div>
          <Product />
          <RatingReview />
        </div>
      </section>
      <section>
        <div className="mb-12">
          <div className="container mx-auto">
            <div className="my-5 pt-3">
              <h1 className="text-2xl font-semibold">You might alo like</h1>
            </div>
            <SellingCarousel />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-300 mt-6">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
