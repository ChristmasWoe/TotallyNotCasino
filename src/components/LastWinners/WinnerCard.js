import React from 'react';
import './WinnerCard.css';
import winnerAvatar from '../../sources/winnerAvatar.svg';
import coin from '../../sources/coin.svg';
const WinnerCard = ({ name, sumWon, styling }) => {
  return (
    <div
      className="winner-card"
      style={{
        border: styling,
      }}
    >
      <img className="winner-avatar" src={winnerAvatar} alt="" />
      <div className="winner-card-content">
        <div className="winner-name">{name}</div>
        <div className="winner-card-sum-block">
          <div className="winner-sum-won">{sumWon}</div>
          <img src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};
export default WinnerCard;
