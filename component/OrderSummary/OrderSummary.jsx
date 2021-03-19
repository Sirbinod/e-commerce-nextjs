import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <h1 className="text-base font-semibold">Order Summary</h1>
      <div className="flex justify-between my-3">
        <h2 className="text-sm text-gray-500">Subtotal (1 item)</h2>
        <h2 className="text-sm font-semibold">Rs 15000</h2>
      </div>
      <div className="flex justify-between my-3">
        <h2 className="text-sm text-gray-500">Delivary Charge</h2>
        <h2 className="text-sm font-semibold">Rs 100 </h2>
      </div>
    </div>
  );
};

export default OrderSummary;
