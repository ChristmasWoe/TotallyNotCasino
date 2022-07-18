import React, { useState } from 'react';
import Main from '../Main/Main';
import Messenger from '../Messenger/Messenger';
import HiddenMessenger from '../HiddenMessenger/HiddenMessenger';
import './BodyBlock.css';

const BodyBlock = () => {
  const [messengerActive, setMessengerActive] = useState(true);

  return (
    <div className="body-block">
      <Main />

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
