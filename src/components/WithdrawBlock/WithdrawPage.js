import React from "react";
import "./WithdrawPage.css";
import WithdrawMethodBlock from "./WithdrawMethodBlock/WithdrawMethodBlock";
import WithdrawCreditsBlock from "./WithdrawCreditsBlock/WithdrawCreditsBlock";

const WithdrawPage = () => {
  return (
    <div className="deposit-page">
      <WithdrawMethodBlock />
      <WithdrawCreditsBlock />
    </div>
  );
};

export default WithdrawPage;
