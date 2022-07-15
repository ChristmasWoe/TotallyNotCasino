import React from 'react';
import './Roulette.css';
import WinChance from '../WinChance/WinChance';
import TimeBeforeStart from '../TimeBeforeStart/TimeBeforeStart';
import pointer from '../../../sources/roulettePointer.svg';
import SkinCard from './SkinCard';

const Roulette = ({ skinPercentage }) => {
  const renderedSlider = skinPercentage.map((percent, i) => {
    return <SkinCard percentage={percent} key={i} />;
  });

  return (
    <div className="roulette">
      <WinChance />
      <div className="roulette-slider">{renderedSlider}</div>
      <img src={pointer} alt="" />

      <TimeBeforeStart />
    </div>
  );
};
export default Roulette;
