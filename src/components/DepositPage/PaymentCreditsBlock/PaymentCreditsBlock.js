import React from "react";
import "./PaymentCreditsBlock.css";
import coinIcon from "../../../sources/coin.svg";
import promocodeIcon from "../../../sources/promocode-icon.svg";

const PaymentCreditsBlock = () => {
  return (
    <div className="payment-credits-block">
      <div className="in-coins deposit-sum">
        <label>В монетах</label>
        <div>
          <input defaultValue={0} />
          <img src={coinIcon} />
        </div>
      </div>
      <div className="in-roubles deposit-sum">
        <label>В рублях</label>
        <div>
          <input defaultValue={0} />
          <p>Руб</p>
        </div>
      </div>
      <div className="telephone-promocode-block">
        <div className="telephone">
          <label>Номер телефона</label>
          <div>
            <input className="telephone-number-input" />
          </div>
        </div>
        <div className="promocode">
          <label>Промокод</label>
          <div>
            <input className="promocode-input" />
            <img src={promocodeIcon} />
          </div>
        </div>
      </div>
      <button className="deposit-block-btn">Пополнить</button>
      <p>Всего к оплате: 100 руб</p>
      <p>Минимальный депозит: 100 руб</p>
    </div>
  );
};

export default PaymentCreditsBlock;
