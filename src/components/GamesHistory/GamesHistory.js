import React from 'react';
import './GamesHistory.css';
import userAvatar from '../../sources/userAvatar.png';
import GameCard from './GameCard/GameCard';

const GamesHistory = () => {
  const title = 'История игр';
  const games = [
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
    {
      avatar: userAvatar,
      nameDate: 'ISSAY - 25.06.2022',
      index: '#256',
      bet: '410',
      chance: '50%',
      prize: '550',
    },
  ];
  const renderedGames = games.map((game, i) => {
    return (
      <GameCard
        key={i}
        avatar={game.avatar}
        nameDate={game.nameDate}
        index={game.index}
        bet={game.bet}
        chance={game.chance}
        prize={game.prize}
      />
    );
  });

  return (
    <div className="games-history">
      <h3>{title}</h3>
      <div className="games-history-cards-block">{renderedGames}</div>
    </div>
  );
};
export default GamesHistory;
