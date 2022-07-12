import React from 'react';
import avatar from '../../sources/winnerAvatar.svg';
import coin from '../../sources/coin.svg';
const BetsCard = ({ skin, value }) => {
  return (
    <div>
      <img src={avatar} alt="" />
      <img src={skin} alt="" />
      <img src={coin} alt="" />
      <div>{value}</div>
    </div>
  );
};
export default BetsCard;
