import React, { useState } from 'react';
import './Main.css';
import infoIcon from '../../sources/info-icon.svg';
import selectModeIcon from '../../sources/select-mode-icon.svg';
import crownIcon from '../../sources/crown-icon.svg';
import coinIcon from '../../sources/coin.svg';
import timerIcon from '../../sources/timer-icon.svg';
import WinnerCard from './WinnerCard';
import emptyCrown from '../../sources/emptyCrown.svg';
import BetsCard from './BetsCard';
import skin from '../../sources/Five-SeveN_Gorodskaya_opasnost 2.png';
const Main = () => {
  const checkWinnerBanner = 'узнать победный лот после окончания игры';
  const [chekWinnerOpen, setCheckWinnerOpen] = useState(false);
  const checkWinnerHidden =
    'Вы скачиваете архив с паролем где уже известен победный лот, после игры вам выдается пароль чтобы вы проверили честность матча';
  const archiveBtnText = 'Скачать архив';
  const onCheckWinnerClick = () => {
    setCheckWinnerOpen(!chekWinnerOpen);
  };

  const selectMode = 'Выбор режима';
  const [selectModeOpen, setSelectModeOpen] = useState(false);
  const onSelectModeClick = () => {
    setSelectModeOpen(!selectModeOpen);
  };

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

  const lastWinnersTitle = 'Последние победители';
  const lastWinners = [
    {
      name: 'Nickname',
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
    return <WinnerCard key={i} name={winner.name} sumWon={winner.sumWon} />;
  });

  const checkHonestry = {
    title: 'Проверить на честность',
    link: 'https://www.random.org/',
  };

  const rouletteTitle = 'Low Price';
  const winChanceText = `Ваш шанс на победу: `;
  const winChance = 25 + '%';
  const yourBet = 410;
  const timeLeftText = 'Времени осталось';
  const timeLeft = 25 + ' сек';

  const minBet = 'Мин: ' + 1;
  const maxBet = 'Макс: ' + 500;

  const makeBet = 'Сделать ставку';

  const hashRoundTitle = 'Hash round';
  const hashRound =
    '9DA7EBE3946C78D60E8CA0DBE409F8AE3F9D00EE39B9298686C71B804B57EF71';

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
    <div className="main-block">
      <div
        className="check-winner-banner ui accordion"
        onClick={() => onCheckWinnerClick()}
      >
        <img src={infoIcon} />
        <h3>{checkWinnerBanner}</h3>
        <div className="check-winner-hidden-content">
          <p>{checkWinnerHidden}</p>
          <button>{archiveBtnText}</button>
        </div>
      </div>
      <div
        className="select-mode ui accordion"
        onClick={() => onSelectModeClick()}
      >
        <img src={selectModeIcon} />
        <h3>{selectMode}</h3>
        <div className="modes-block"></div>
      </div>
      <div className="round">
        <h3>{round}</h3>
        <div className="round-stats">{renderedRoundStats}</div>
      </div>
      <div className="last-winners">
        <h3>{lastWinnersTitle}</h3>
        <div className="winners-cards-block">{renderedLastWinners}</div>
      </div>
      <div className="check-honestry">
        <div className="check-honetsry-title">{checkHonestry.title}</div>
        <div className="check-honestry-link">{checkHonestry.link}</div>
      </div>
      <div className="roulette-block">
        <div className="roulette-title">
          <img src={crownIcon} alt="" />
          <h1>{rouletteTitle}</h1>
          <img src={crownIcon} alt="" />
        </div>
        <div className="roulette">
          <div className="win-chance">
            {winChanceText}
            <span>{winChance}</span>
          </div>
          <div className="coins-betted">
            {yourBet}
            <img src={coinIcon} />
          </div>
          <div className="time-left">
            {timeLeftText} <br />
            <span>
              <img src={timerIcon} /> {timeLeft}
            </span>
          </div>
        </div>
        <div className="min-max-bets">
          <div className="min-bet">
            {minBet}
            <img src={coinIcon} />
          </div>
          <div className="max-bet">
            {maxBet}
            <img src={coinIcon} />
          </div>
        </div>
        <div className="make-bet">
          <input type="number"></input>
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
      <div className="bets">
        <h3>{betsTitle}</h3>
        <div className="bets-cards-block">{renderedBets}</div>
      </div>
    </div>
  );
};

export default Main;
