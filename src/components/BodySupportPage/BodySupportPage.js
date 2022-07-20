import React, { useState } from 'react';
import Messenger from '../Messenger/Messenger';
import HiddenMessenger from '../HiddenMessenger/HiddenMessenger';
import SupportPage from '../SupportPage/SupportPage';
import './BodySupportPage.css';

const BodySupportPage = () => {
  const [messengerActive, setMessengerActive] = useState(true);

  return (
    <div className="body-block">
      <SupportPage />

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
export default BodySupportPage;
