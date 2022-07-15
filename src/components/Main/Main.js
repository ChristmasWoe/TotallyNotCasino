import React from 'react';
import './Main.css';

import CheckWinner from '../CheckWinner/CheckWinner';
import SelectMode from '../SelectMode/SelectMode';
import Round from '../Round/Round';
import LastWinners from '../LastWinners/LastWinners';
import CheckHonestry from '../CheckHonestry/CheckHonestry';
import RouletteBlock from '../RouletteBlock/RouletteBlock';
import Bets from '../Bets/Bets';

const Main = () => {
  return (
    <div className="main-block">
      <CheckWinner />
      <SelectMode />
      <Round />
      <LastWinners />
      <CheckHonestry />
      <RouletteBlock />
      <Bets />
    </div>
  );
};

export default Main;
