import React from "react";

const PaymentMethodDetail = () => {
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
      <div className=" my-4">
        <h1 className="my-1 px-1">Card number</h1>
        <input
          className=" rounded-full w-72 h-7 py-4 text-gray-700 px-3 text-sm mr-5 border focus:outline-none"
          type="text"
          placeholder="1234567890"
        />
      </div>
      <div className=" my-2 ">
        <h1 className="my-1 px-1">Cardholder Name</h1>
        <input
          className=" rounded-full w-72 h-7 py-4 text-gray-700 px-3 mr-5 text-sm border focus:outline-none"
          type="text"
          placeholder="Enter Name"
        />
      </div>
      <div className="flex my-3 pb-3 justify-between">
        <div className=" ">
          <h1 className="my-1 px-1">validity Period</h1>
          <input
            className=" rounded-full w-32 h-7 py-4 text-gray-700 px-3 mr-5 text-sm border focus:outline-none"
            type="text"
            placeholder="dd-mm-yyyy"
          />
        </div>
        <div className=" ">
          <h1 className="my-1 px-1">CCV</h1>
          <input
            className=" rounded-full w-32 h-7 py-4 text-gray-700 px-3 mr-5 text-sm border focus:outline-none"
            type="text"
            placeholder="0123456789"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodDetail;
