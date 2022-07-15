import React from 'react';
import './RouletteWaiting.css';
import coinIcon from '../../../sources/coin.svg';
import timerIcon from '../../../sources/timer-icon.svg';
import WinChance from '../WinChance/WinChance';

const RouletteWaiting = () => {
  const yourBet = 410;
  const timeLeftText = 'Времени осталось';
  const timeLeft = 25 + ' сек';
  return (
    <div className="roulette-waiting">
      <WinChance />
      <div className="coins-betted">
        {yourBet}
        <img src={coinIcon} alt="" />
      </div>
      <div className="time-left">
        {timeLeftText} <br />
        <span>
          <img src={timerIcon} alt="" /> {timeLeft}
        </span>
      </div>
    </div>
  );
};
export default RouletteWaiting;
