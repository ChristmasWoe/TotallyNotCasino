import React from "react";
import promocodeIcon from "../../../sources/promocode-icon.svg";
import "./PromocodeBlock.css";

const PromocodeBlock = () => {
  return (
    <div className="promocode-block">
      <div className="promocode-title">
        <img src={promocodeIcon} /> <p>Промокод</p>
      </div>
      <input
        type="text"
        className="promocode-input"
        placeholder="Введите промокод"
      ></input>
    </div>
  );
};

export default PromocodeBlock;
