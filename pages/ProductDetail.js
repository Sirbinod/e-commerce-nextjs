import CarouselItem from "../component/CarouselItem/CarouselItem";
import Footer from "../component/Footer/Footer";
import Layout from "../component/Layout/Layout";
// import Header from "../component/Header/Header";
import MaybeLikeCarousel from "../component/MayBeLikeCarousel/MaybeLikeCarousel";
import MegaMenu from "../component/MegaMenu/MegaMenu";
// import MegaMenu from "../component/MegaMenu/MegaMenu";
import Product from "../component/Product/Product";
import RatingReview from "../component/RatingReview/RatingReview";
import SellingCarousel from "../component/SellingCarousel/SellingCarousel";

export default function ProductDetail() {
  return (
    <div className="bg-gray-5">
      <section className="bg-white sticky top-24 z-10">
        <MegaMenu />
      </section>
      <section>
        <div className="container mx-auto">
          <div className="flex space-x-3 items-center my-1.5">
            <h3 className="text-base text-gray-500">Electronic</h3>
            <h3 className="arrow"></h3>
            <h3 className="text-red-600">Computer</h3>
          </div>
          <Product />
          <RatingReview />
        </div>
      </section>
      <section>
        <div className="mb-12">
          <div className="container mx-auto">
            <div className="my-5 pt-3">
              <h1 className="text-xl font-meduim">You might also like</h1>
            </div>
            {/* <MaybeLikeCarousel />
             */}
            <CarouselItem />
          </div>
        </div>
      </section>
    </div>
  );
}
