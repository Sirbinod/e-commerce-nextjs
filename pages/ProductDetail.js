import MegaMenu from "../component/MegaMenu/MegaMenu";
import MaybeLikeCarousel from "../component/Carousel/MayBeLikeCarousel/MaybeLikeCarousel";
import Product from "../component/Product/Product";
import ProductSelectionHeader from "../component/ProductSelectionHeader/ProductSelectionHeader";
import RatingReview from "../component/RatingReview/RatingReview";

export default function ProductDetail() {
  return (
    <div className="bg-gray-5">
      <section className="bg-white sticky top-24 z-10">
        <MegaMenu />
      </section>
      <section>
        <div className="container mx-auto">
          <div className="my-2">
            <ProductSelectionHeader />
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
            <MaybeLikeCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}
