import React from 'react';
import './WinChance.css';

const WinChance = () => {
  const winChanceText = `Ваш шанс на победу: `;
  const winChance = 25 + '%';
  return (
    <div className="win-chance">
      {winChanceText}
      <span>{winChance}</span>
    </div>
  );
};
export default WinChance;
