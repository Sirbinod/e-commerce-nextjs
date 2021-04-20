import {useState} from "react";
import ShoppingBillingCard from "../component/Card/ShoppingBillingCard/ShoppingBillingCard";
import ShoppBillInfo from "../component/Card/ShopBillInfo/ShopBillInfo";
import Billing from "../component/Card/Billing/Billing";
import React from "react";

export default function ShoppingCart() {
  const [step, setStep] = useState(0);
  const togglestep = (x) => {
    setStep(x);
  };
  const shippingOptions = [
    {
      index: 0,
      buttonText: "Component 1",
      action: () => {
        togglestep(1);
      },
      component: <div>Step 1</div>,
      heading: "Component 1",
    },
    {
      index: 1,
      buttonText: "Button text2",
      action: () => {
        togglestep(2);
      },
      component: <div>Step 2</div>,
      heading: "Component 2",
    },
  ];
  return (
    <div className="my-3">
      <div className="container mx-auto">
        <div className="flex  items-center space-x-2 mt-4">
          <h2 className="text-sm text-gray-500">Electric </h2>
          <h2 className="arrow"></h2>
          <h2 className="text-sm text-gray-500">Computer</h2>
          <h2 className="arrow"></h2>
          <h2 className="text-sm text-yellow-600">Shopping & Billing </h2>
        </div>
        <div className="flex space-x-5 items-center my-7">
          <h1 className="custom-title">Shopping & Billing</h1>
        </div>
        <div className="flex space-x-4 py-3">
          <ShoppingBillingCard />
          <Billing item={shippingOptions[step]} />
        </div>
      </div>
    </div>
  );
}
