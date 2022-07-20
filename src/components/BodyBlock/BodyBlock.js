import React, { useState } from 'react';
import Main from '../Main/Main';
import Messenger from '../Messenger/Messenger';
import HiddenMessenger from '../HiddenMessenger/HiddenMessenger';
import SupportPage from '../SupportPage/SupportPage';
import './BodyBlock.css';
import GamesHistory from '../GamesHistory/GamesHistory';

const BodyBlock = () => {
  const [messengerActive, setMessengerActive] = useState(true);

  return (
    <div className="body-block">
      {/* <Main /> */}
      {/* <SupportPage /> */}
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
export default BodyBlock;
