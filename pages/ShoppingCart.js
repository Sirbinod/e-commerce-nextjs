import MaybeLikeCarousel from "../component/Carousel/MayBeLikeCarousel/MaybeLikeCarousel";
import MyCard from "../component/Card/MyCard/MyCard";
import OrderSummery from "../component/Card/OrderSummery/OrderSummery";

export default function ShoppingCart() {
  return (
    <>
      <section>
        <div className="my-3">
          <div className="container mx-auto">
            <div className="flex  items-center space-x-2 mt-4">
              <h2 className="text-sm text-gray-500">Electric </h2>
              <h2 className="arrow"></h2>
              <h2 className="text-sm text-gray-500">Computer</h2>
              <h2 className="arrow"></h2>
              <h2 className="text-sm text-yellow-600">Shopping Cart </h2>
            </div>
            <div className="flex space-x-5 items-center my-5">
              <h1 className="custom-title">My Cart</h1>
              <h2 className="text-sm w-7 h-7 rounded py-1 bg-yellow-700 text-white text-center">
                3
              </h2>
            </div>
            <div className="flex space-x-6">
              <MyCard />
              <OrderSummery />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="my-4">
              <h1 className="text-xl font-meduim">You might also like</h1>
            </div>
            <MaybeLikeCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
