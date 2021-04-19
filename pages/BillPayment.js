import PaymentMethod from "../component/Card/PaymentMethod/PaymentMethod";
import ShoppingBillingCard from "../component/Card/ShoppingBillingCard/ShoppingBillingCard";

export default function ShoppingCart() {
  return (
    <>
      <div className="my-3">
        <div className="container mx-auto">
          <div className="flex  items-center space-x-2">
            <h2 className="text-sm text-gray-500">Electric </h2>
            <h2 className="arrow"></h2>
            <h2 className="text-sm text-gray-500">Computer</h2>
            <h2 className="arrow"></h2>
            <h2 className="text-sm text-yellow-600">Bill Payment </h2>
          </div>
          <div className="flex space-x-5 items-center my-5">
            <h1 className="custom-title">Bill Payment</h1>
          </div>
          <div className="flex space-x-6">
            <ShoppingBillingCard />
            <PaymentMethod />
          </div>
        </div>
      </div>
    </>
  );
}
