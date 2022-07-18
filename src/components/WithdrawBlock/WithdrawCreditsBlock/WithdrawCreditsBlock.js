import React from "react";
import "./WithdrawCreditsBlock.css";
import coinIcon from "../../../sources/coin.svg";

const WithdrawCreditsBlock = () => {
  return (
    <div className="withdraw-credits-block">
      <div className="in-coins withdraw-sum">
        <label>В монетах</label>
        <div>
          <input defaultValue={0} />
          <img src={coinIcon} />
        </div>
      </div>
      <div className="in-roubles withdraw-sum">
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
      </div>
      <button className="withdraw-block-btn">Вывод</button>
      <p>Всего будет выведено: 100 руб</p>
      <p>Минимальный вывод: 100 руб</p>
    </div>
  );
};

export default WithdrawCreditsBlock;
