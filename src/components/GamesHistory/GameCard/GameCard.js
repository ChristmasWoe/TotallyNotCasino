import React from 'react';
import './GameCard.css';
import coin from '../../../sources/coin.svg';

const GameCard = ({ avatar, nameDate, index, bet, chance, prize }) => {
  const betTitle = 'Ставка';
  const chanceTitle = 'Шанс';
  const prizeTitle = 'Выигрыш';
  return (
    <div className="game-card">
      <img src={avatar} alt="" />
      <div className="game-card-content-block">
        <div className="game-card-name-date-index">
          <div className="game-card-name-date">{nameDate}</div>
          <div className="game-card-index">{index}</div>
        </div>
        <div className="game-card-bet-chance-prize-box">
          <div className="game-card-bet">
            <div className="game-card-bet-title">{betTitle}</div>
            <div className="game-card-bet-value">
              {bet}
              <img src={coin} alt="" />
            </div>
          </div>
          <div className="game-card-chance">
            <div className="game-card-chance-title">{chanceTitle}</div>
            <div className="game-card-chance-value">{chance}</div>
          </div>
          <div className="game-card-prize">
            <div className="game-card-prize-title">{prizeTitle}</div>
            <div className="game-card-prize-value">
              {prize}
              <img src={coin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
