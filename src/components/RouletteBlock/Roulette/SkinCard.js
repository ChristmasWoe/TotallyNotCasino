import React from 'react';
import './SkinCard.css';
import avatar from '../../../sources/winnerAvatar.svg';
const SkinCard = ({ percentage }) => {
  return (
    <div className="skin-card">
      <img src={avatar} alt="" />
      <div className="skin-percentage">{percentage}</div>
    </div>
  );
};
export default SkinCard;
