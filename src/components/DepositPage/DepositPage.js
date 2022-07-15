import React from "react";
import "./DepositPage.css";
import PromocodeBlock from "./PromocodeBlock/PromocodeBlock";
import PaymentMethodBlock from "./PaymentMethodBlock/PaymentMethodBlock";
import PaymentCreditsBlock from "./PaymentCreditsBlock/PaymentCreditsBlock";

const DepositPage = () => {
  return (
    <div className="deposit-page">
      <PromocodeBlock />
      <PaymentMethodBlock />
      <PaymentCreditsBlock />
    </div>
  );
};

export default DepositPage;
