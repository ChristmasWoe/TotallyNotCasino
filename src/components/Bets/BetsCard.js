import React from 'react';
import avatar from '../../sources/winnerAvatar.svg';
import coin from '../../sources/coin.svg';
import './BetsCard.css';
const BetsCard = ({ skin, value }) => {
  return (
    <div className="bets-card">
      <img className="bets-card-avatar" src={avatar} alt="" />
      <img className="bets-card-skin" src={skin} alt="" />
      <div className="bets-card-value">
        <img src={coin} alt="" />
        <span>{value}</span>
      </div>
    </div>
  );
};
export default BetsCard;
