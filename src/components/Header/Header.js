import React from 'react';
import './Header.css';
import profileLogo from '../../sources/profile-logo.png';
import mainLogo from '../../sources/mainLogo.svg';
import depositLogo from '../../sources/deposit-logo.svg';
import withdrawLogo from '../../sources/withdraw-logo.svg';
import coin from '../../sources/coin.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const goToPath = (e,p) => {
    e.preventDefault();
    navigate("../"+p, { replace: true });
  }
 
  const buttons = [
    {label:"Главная",callback:(e)=>{goToPath(e,"")}},
    {label:"Честная игра",callback:()=>{}},
    {label:"История игр",callback:(e)=>{goToPath(e,"history")}},
    {label:"Поддержка",callback:(e)=>{goToPath(e,"support")}}]

  
  const renderedButtons = buttons.map((b, i) => {
      return (
        <button onClick={b.callback} className="header-menu-button" key={i}>
          {b.label}
        </button>
      );
   
    
   
  });
  const nickname = 'Nickname';
  const balance = '25000';

 

  return (
    <div className="header">
      <div onClick={e=>goToPath(e,"")} className="header-logo">
        <img src={mainLogo} alt="" />
      </div>
      <div className="header-menu">{renderedButtons}</div>
      <div className="withdraw-profile-block">
        <button onClick={e=>goToPath(e,"deposit")} className="deposit-btn">
          <img src={depositLogo} alt="" />
        </button>
        <button onClick={e=>goToPath(e,"withdraw")} className="withdraw-btn">
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
          <img onClick={e=>goToPath(e,"profile")} className="profile-logo" src={profileLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
