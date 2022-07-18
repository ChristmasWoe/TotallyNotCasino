import React, { useState } from 'react';
import './RouletteBlock.css';
import crownIcon from '../../sources/crown-icon.svg';
import coinIcon from '../../sources/coin.svg';
import emptyCrown from '../../sources/emptyCrown.svg';
import RouletteWaiting from './RouletteWaiting/RouletteWaiting';
import Roulette from './Roulette/Roulette';
import RouletteWinner from './RouletteWinner/RouletteWinner';

const RouletteBlock = () => {
  const [inputValue, setInputValue] = useState(0);

  const skinPercentage = [
    '54.0%',
    '54.0%',
    '54.0%',
    '54.0%',
    '25.5%',
    '54.0%',
    '54.0%',
  ];

  const rouletteTitle = 'Low Price';

  const minBet = 'Мин: ';
  const minBetValue = 1;
  const maxBet = 'Макс: ';
  const maxBetValue = 500;

  const makeBet = 'Сделать ставку';

  const hashRoundTitle = 'Hash round';
  const hashRound =
    '9DA7EBE3946C78D60E8CA0DBE409F8AE3F9D00EE39B9298686C71B804B57EF71';

  return (
    <div className="roulette-block">
      <div className="roulette-title">
        <img src={crownIcon} alt="" />
        <h1>{rouletteTitle}</h1>
        <img src={crownIcon} alt="" />
      </div>
      <Roulette skinPercentage={skinPercentage} />
      {/* <RouletteWaiting /> */}
      {/* <RouletteWinner percentage={skinPercentage[0]} /> */}

      <div className="min-max-bets">
        <div className="min-bet">
          {minBet}
          <span>{minBetValue}</span>
          <img src={coinIcon} alt="" />
        </div>
        <div className="max-bet">
          {maxBet}
          <span>{maxBetValue}</span>

          <img src={coinIcon} alt="" />
        </div>
      </div>

      <div className="make-bet">
        <input defaultValue={inputValue} type="number"></input>
        <button>{makeBet}</button>
      </div>

      <div className="round-hash-block">
        <img src={emptyCrown} alt="" />
        <div className="round-hash">
          <h3>{hashRoundTitle}</h3>
          <p>{hashRound}</p>
        </div>
        <img src={emptyCrown} alt="" />
      </div>
    </div>
  );
};
export default RouletteBlock;
