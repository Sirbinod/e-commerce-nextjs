import React from "react";

const Billing = ({item}) => {
  return (
    <div>
      <div className="w-96 bg-white px-9 py-4 rounded">
        <div>{item.component}</div>
        <div className="flex justify-between mt-5 ">
          <h2 className="subtotle">Total</h2>
          <h2 className="total">Rs 15100 </h2>
        </div>
        <button
          onClick={() => item.action()}
          className=" pro-button text-center w-80 h-11 rounded-3xl  my-3 focus:outline-none"
        >
          {item.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Billing;
