import React from 'react';
import './Bets.css';
import BetsCard from './BetsCard';
import skin from '../../sources/Five-SeveN_Gorodskaya_opasnost 2.png';
const Bets = () => {
  const betsTitle = 'Ставки';
  const bets = [
    {
      skin: skin,
      value: 100,
    },
    {
      skin: skin,
      value: 100,
    },
    {
      skin: skin,
      value: 100,
    },
    {
      skin: skin,
      value: 100,
    },
    {
      skin: skin,
      value: 100,
    },
    {
      skin: skin,
      value: 100,
    },
  ];
  const renderedBets = bets.map((bet, i) => {
    return <BetsCard key={i} skin={bet.skin} value={bet.value} />;
  });
  return (
    <div className="bets">
      <h3>{betsTitle}</h3>
      <div className="bets-cards-block">{renderedBets}</div>
    </div>
  );
};
export default Bets;
