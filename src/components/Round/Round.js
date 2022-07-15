import React from 'react';
import './Round.css';
import coinIcon from '../../sources/coin.svg';

const Round = () => {
  const round = 'Раунд';
  const roundStats = [
    {
      title: 'Игра: ',
      stat: 256,
    },
    {
      title: 'Участников: ',
      stat: 6,
    },
    {
      title: 'Банк: ',
      stat: 1000,
    },
  ];
  const renderedRoundStats = roundStats.map((roundStat, i) => {
    return (
      <p key={i}>
        {roundStat.title}
        <span>
          {roundStat.stat}
          {i === 2 ? <img src={coinIcon} alt="" /> : ''}
        </span>
      </p>
    );
  });
  return (
    <div className="round">
      <h3>{round}</h3>
      <div className="round-stats">{renderedRoundStats}</div>
    </div>
  );
};
export default Round;
