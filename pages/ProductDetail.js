import Footer from "../component/Footer/Footer";
import Layout from "../component/Layout/Layout";
// import Header from "../component/Header/Header";
import MaybeLikeCarousel from "../component/MayBeLikeCarousel/MaybeLikeCarousel";
import MegaMenu from "../component/MegaMenu/MegaMenu";
// import MegaMenu from "../component/MegaMenu/MegaMenu";
import Product from "../component/Product/Product";
import RatingReview from "../component/RatingReview/RatingReview";

export default function ProductDetail() {
  return (
    <div className="bg-gray-5">
      <section className="bg-white sticky top-24 z-10">
        <MegaMenu />
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex space-x-3 items-center my-1.5">
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
            <MaybeLikeCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
