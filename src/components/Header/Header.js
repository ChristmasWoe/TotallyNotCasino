import React from 'react';
import './Header.css';
import profileLogo from '../../sources/profile-logo.png';
import mainLogo from '../../sources/mainLogo.svg';
import depositLogo from '../../sources/deposit-logo.svg';
import withdrawLogo from '../../sources/withdraw-logo.svg';
import coin from '../../sources/coin.svg';

const Header = () => {
  const buttons = ['Главная', 'Честная игра', 'История игр', 'Поддержка'];
  const renderedButtons = buttons.map((line, i) => {
    return (
      <button className="header-menu-button" key={i}>
        {line}
      </button>
    );
  });
  const nickname = 'Nickname';
  const balance = '25000';
  return (
    <div className="header">
      <div className="header-logo">
        <img src={mainLogo} alt="" />
      </div>
      <div className="header-menu">{renderedButtons}</div>
      <div className="withdraw-profile-block">
        <button className="deposit-btn">
          <img src={depositLogo} alt="" />
        </button>
        <button className="withdraw-btn">
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
          <img className="profile-logo" src={profileLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
