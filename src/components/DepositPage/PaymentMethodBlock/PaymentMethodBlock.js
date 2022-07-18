import React from "react";
import "./PaymentMethodBlock.css";
import qiwiLogo from "../../../sources/qiwi-logo.png";
import vsmcLogo from "../../../sources/vsmc-logo.png";
import yoomoneyLogo from "../../../sources/yoomoney-logo.png";
import sberbankLogo from "../../../sources/sberbank-logo.png";

const PaymentMethodBlock = () => {
  return (
    <div className="payment-method-block">
      <div className="payment-method-card">
        <div>
          <img src={qiwiLogo} />
          <p>QIWI</p>
        </div>
        <span></span>
      </div>
      <div className="payment-method-card">
        <div>
          <img src={vsmcLogo} />
          <p>VISA/MASTERCARD</p>
        </div>
        <span></span>
      </div>
      <div className="payment-method-card">
        <div>
          <img src={yoomoneyLogo} id="yoomoney-logo" />
          <p>YOOMONEY</p>
        </div>
        <span></span>
      </div>
      <div className="payment-method-card">
        <div>
          <img src={sberbankLogo} />
          <p>Сбер</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodBlock;
