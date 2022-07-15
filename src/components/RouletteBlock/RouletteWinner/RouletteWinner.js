import React from 'react';
import './RouletteWinner.css';
import TimeBeforeStart from '../TimeBeforeStart/TimeBeforeStart';
import avatar from '../../../sources/winnerAvatar.svg';
import cupIcon from '../../../sources/winnerCup.svg';

const RouletteWinner = ({ percentage }) => {
  const congrats = 'Поздравляем!';
  const line = 'Nickname победил с шансом:';
  return (
    <div className="roulette-winner">
      <div className="roulette-winner-banner">
        {congrats}
        <img className="winner-skin" src={avatar} alt="" />
        <span className="congrats-line">
          {line} <br />
          <span className="percentage-of-skin">{percentage}</span>
        </span>
        <img className="winner-cup" src={cupIcon} alt="" />
      </div>
      <TimeBeforeStart />
    </div>
  );
};
export default RouletteWinner;
