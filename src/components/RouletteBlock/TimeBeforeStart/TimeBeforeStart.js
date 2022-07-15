import React from 'react';
import './TimeBeforeStart.css';
import timerIcon from '../../../sources/timer-icon.svg';

const TimeBeforeStart = () => {
  const timeBeforeStartText = 'До начала';
  const timeBeforeStart = 25 + ' сек';
  return (
    <div className="time-before-start">
      {timeBeforeStartText} <br />
      <span className="seconds-before-start">
        <img src={timerIcon} alt="" /> {timeBeforeStart}
      </span>
    </div>
  );
};
export default TimeBeforeStart;
