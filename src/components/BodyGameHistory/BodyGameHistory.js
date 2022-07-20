import React, { useState } from 'react';
import Messenger from '../Messenger/Messenger';
import HiddenMessenger from '../HiddenMessenger/HiddenMessenger';
import SupportPage from '../SupportPage/SupportPage';
import './BodyGameHistory.css';
import GamesHistory from '../GamesHistory/GamesHistory';

const BodyGameHistory = () => {
  const [messengerActive, setMessengerActive] = useState(true);

  return (
    <div className="body-block">
      <GamesHistory />

      {messengerActive ? (
        <Messenger
          onClick={() => {
            setMessengerActive(!messengerActive);
          }}
        />
      ) : (
        <HiddenMessenger
          onClick={() => {
            setMessengerActive(!messengerActive);
          }}
        />
      )}
    </div>
  );
};
export default BodyGameHistory;
