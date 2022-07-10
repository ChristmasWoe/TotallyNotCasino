import React from "react";
import "./Main.css";
import infoIcon from "../../sources/info-icon.svg";
import selectModeIcon from "../../sources/select-mode-icon.svg";
import crownIcon from "../../sources/crown-icon.svg";
import coinIcon from "../../sources/coin.svg";
import timerIcon from "../../sources/timer-icon.svg";

const Main = () => {
  const winChance = 25 + "%";
  const yourBet = 410;
  const timeLeft = 25;
  const minBet = 1;
  const maxBet = 500;
  const gamesCount = 256;
  const playersCount = 6;
  const totalBank = 1000;

  return (
    <div className="main-block">
      <div className="check-winner-banner">
        <img src={infoIcon} />
        <h3>узнать победный лот после окончания игры</h3>
      </div>
      <div className="select-mode">
        <img src={selectModeIcon} />
        <h3>Выбор режима</h3>
      </div>
      <div className="round">
        <h3>Раунд</h3>
        <div className="round-stats">
          <p>
            Игра: <span>{gamesCount}</span>
          </p>
          <p>
            Участников: <span>{playersCount}</span>
          </p>
          <p>
            Банк: <span>{totalBank}</span>
          </p>
        </div>
      </div>
      <div className="last-winners"></div>
      <div className="check-honestry"></div>
      <div className="roulette-block">
        <div className="roulette-title">
          <img src={crownIcon} />
          <h1>Low Price</h1>
          <img src={crownIcon} />
        </div>
        <div className="roulette">
          <div className="win-chance">
            Ваш шанс на победу: <span>{winChance}</span>
          </div>
          <div className="coins-betted">
            {yourBet}
            <img src={coinIcon} />
          </div>
          <div className="time-left">
            Времени осталось <br />
            <span>
              <img src={timerIcon} /> {timeLeft} сек
            </span>
          </div>
        </div>
        <div className="min-max-bets">
          <div className="min-bet">
            Мин: {minBet}
            <img src={coinIcon} />
          </div>
          <div className="max-bet">
            Макс: {maxBet}
            <img src={coinIcon} />
          </div>
        </div>
        <div className="make-bet">
          <input type="number" />
          <button>Cделать ставку</button>
        </div>
        <div className="round-hash">
          <h3>Hash round</h3>
          <p>
            9DA7EBE3946C78D60E8CA0DBE409F8AE3F9D00EE39B9298686C71B804B57EF71
          </p>
        </div>
      </div>
      <div className="bets"></div>
    </div>
  );
};

export default Main;
