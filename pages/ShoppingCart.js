import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import MaybeLikeCarousel from "../component/MayBeLikeCarousel/MaybeLikeCarousel";
import MyCard from "../component/MyCard/MyCard";

export default function ShoppingCart() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <div className="my-3">
          <div className="container mx-auto">
            <div className="flex space-x-2">
              <h2 className="text-sm">Electric =</h2>
              <h2 className="text-sm">Computer =</h2>
              <h2 className="text-sm text-yellow-600">Sopping Cart </h2>
            </div>
            <div className="flex space-x-5 items-center my-5">
              <h1 className="text-lg font-semibold">My Cart</h1>
              <h2 className="text-sm w-6 h-6 rounded py-0.5 bg-yellow-700 text-white text-center">
                3
              </h2>
            </div>
            <MyCard />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="my-4">
              <h1 className="text-2xl font-semibold">You might also like</h1>
            </div>
            <MaybeLikeCarousel />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7 bg-gray-300">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
