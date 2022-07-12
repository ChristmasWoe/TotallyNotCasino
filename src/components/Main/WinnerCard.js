import React from 'react';
import winnerAvatar from '../../sources/winnerAvatar.svg';
import coin from '../../sources/coin.svg';
const WinnerCard = ({ name, sumWon, key }) => {
  return (
    <div>
      <img src={winnerAvatar} alt="" />
      <div>{name}</div>
      <div>{sumWon}</div>
      <img src={coin} alt="" />
    </div>
  );
};
export default WinnerCard;
