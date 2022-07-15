import React from 'react';
import './LastWinners.css';
import WinnerCard from './WinnerCard';

const LastWinners = () => {
  const lastWinnersTitle = 'Последние победители';
  const lastWinners = [
    {
      name: 'ISSAY',
      sumWon: 1000,
    },
    {
      name: 'Nickname',
      sumWon: 500,
    },
    {
      name: 'Nickname',
      sumWon: 100,
    },
  ];
  const renderedLastWinners = lastWinners.map((winner, i) => {
    let styling;
    if (i === 0) {
      styling = '1px solid rgba(235, 180, 28, 1)';
    }

    return (
      <WinnerCard
        styling={styling}
        key={i}
        name={winner.name}
        sumWon={winner.sumWon}
      />
    );
  });

  return (
    <div className="last-winners">
      <h3>{lastWinnersTitle}</h3>
      <div className="winners-cards-block">{renderedLastWinners}</div>
    </div>
  );
};
export default LastWinners;
