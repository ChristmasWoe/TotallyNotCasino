import React from 'react';
import './Header.css';
import profileLogo from '../../sources/profile-logo.png';
import mainLogo from '../../sources/mainLogo.svg';
import depositLogo from '../../sources/deposit-logo.svg';
import withdrawLogo from '../../sources/withdraw-logo.svg';
import coin from '../../sources/coin.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const goToWithdraw = e => {
    e.preventDefault();
    navigate("../withdraw", { replace: true });
  }

  const goToMain = e => {
    e.preventDefault();
    navigate("../", { replace: true });
  }

  const goToDeposit = e => {
    e.preventDefault();
    navigate("../deposit", { replace: true });
  }

  const goToProfile= e => {
    e.preventDefault();
    navigate("../profile", { replace: true });
  }

  const buttons = ['Главная', 'Честная игра', 'История игр', 'Поддержка'];
  let navigate = useNavigate();
  const renderedButtons = buttons.map((line, i) => {
    if(i==0){
      return (
        <button onClick={goToMain} className="header-menu-button" key={i}>
          {line}
        </button>
      );
    }else{
      return (
        <button className="header-menu-button" key={i}>
          {line}
        </button>
      );
    }
   
  });
  const nickname = 'Nickname';
  const balance = '25000';

 

  return (
    <div className="header">
      <div onClick={goToMain} className="header-logo">
        <img src={mainLogo} alt="" />
      </div>
      <div className="header-menu">{renderedButtons}</div>
      <div className="withdraw-profile-block">
        <button onClick={goToDeposit} className="deposit-btn">
          <img src={depositLogo} alt="" />
        </button>
        <button onClick={goToWithdraw} className="withdraw-btn">
          <img src={withdrawLogo} alt="" />
        </button>
        <div className="profile-block">
          <div className="profile-info-block">
            <h4 className="nickname">{nickname}</h4>
            <div className="balance-block">
              <h5 className="balance">{balance}</h5>
              <img src={coin} alt="" />
            </div>
          </div>
          <img onClick={goToProfile} className="profile-logo" src={profileLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
