import React from "react";
import "./Header.css";
import profileLogo from "../../sources/profile-logo.png";
import mainLogo from "../../sources/mainLogo.svg";
import depositLogo from "../../sources/deposit-logo.svg";
import withdrawLogo from "../../sources/withdraw-logo.svg";
import coin from "../../sources/coin.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={mainLogo} />
      </div>
      <ul className="header-menu">
        <li>Главная</li>
        <li>Честная игра</li>
        <li>История игр</li>
        <li>Поддержка</li>
      </ul>
      <div className="withdraw-profile-block">
        <button className="deposit-btn">
          <img src={depositLogo} />
        </button>
        <button className="withdraw-btn">
          <img src={withdrawLogo} />
        </button>
        <div className="profile-block">
          <div>
            <h4 className="nickname">Nickname</h4>
            <div className="balance-block">
              <h5 className="balance">25000</h5>
              <img src={coin} />
            </div>
          </div>
          <img src={profileLogo} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
