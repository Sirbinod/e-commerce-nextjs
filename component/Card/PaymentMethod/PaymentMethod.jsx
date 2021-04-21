import React from "react";
import Link from "next/link";

const PaymentMethod = () => {
  const paym = [
    {id: 1, payimg: "/paym1.png"},
    {
      id: 2,
      payimg: "/paym2.png",
    },
    {
      id: 3,
      payimg: "/paym3.png",
    },
    {
      id: 4,
      payimg: "/paym4.png",
    },
  ];
  return (
    <div>
      <h1 className="payment-cart-tit">Payment Method</h1>
      <div className="flex py-4 mt-2 justify-between items-center">
        {paym.map((pimg) => {
          return (
            <div
              id={pimg.id}
              className="pay-met border-gray-500 border rounded-sm"
              style={{
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <img src={pimg.payimg} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;
