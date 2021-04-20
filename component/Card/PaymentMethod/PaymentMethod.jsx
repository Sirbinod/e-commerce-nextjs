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
      <div className="card-w px-8 py-4 rounded">
        <h1 className="payment-cart-tit">Shopping & Billing Information</h1>
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
        <div className="flex justify-between my-3 py-1">
          <h2 className="subtotle">Total</h2>
          <h2 className="total">Rs 15100 </h2>
        </div>
        <Link href="/BillPayment">
          <button className=" pro-button text-center w-80 h-10 rounded-3xl  my-2 outline-none focus:outline-none">
            Pay & Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentMethod;
