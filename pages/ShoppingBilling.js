import {useState} from "react";
import ShoppingBillingCard from "../component/Card/ShoppingBillingCard/ShoppingBillingCard";
import ShoppBillInfo from "../component/Card/ShopBillInfo/ShopBillInfo";
import Billing from "../component/Card/Billing/Billing";
import PaymentMethod from "../component/Card/PaymentMethod/PaymentMethod";
import React from "react";
import Link from "next/link";
import PaymentMethodDetail from "../component/Card/PaymentMethodDetail/PaymentMethodDetail";

export default function ShoppingCart() {
  const [step, setStep] = useState(0);
  const togglestep = (x) => {
    setStep(x);
  };
  const shoppingOptions = [
    {
      index: 0,
      buttonText: "Procced To Pay",
      action: () => {
        togglestep(1);
      },
      component: <ShoppBillInfo />,
      heading: "Shopping & Billing",
    },
    {
      index: 1,
      buttonText: "Pay & Checkout",
      action: () => {
        togglestep(2);
      },
      component: <PaymentMethod />,
      heading: "Bill Payment",
    },
    {
      index: 2,
      buttonText: "Pay & Checkout",
      action: () => {
        togglestep(<Link href="/Success"></Link>);
      },
      component: <PaymentMethodDetail />,
      heading: "Bill Payment",
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
          <h2 className="text-sm text-yellow-600">
            {shoppingOptions[step].heading}
          </h2>
        </div>
        <div className="flex space-x-5 items-center my-7">
          <h1 className="custom-title">{shoppingOptions[step].heading}</h1>
        </div>
        <div className="flex space-x-4 py-3">
          <div>
            <ShoppingBillingCard />
          </div>
          <div>
            <Billing item={shoppingOptions[step]} />
          </div>
        </div>
      </div>
    </div>
  );
}
