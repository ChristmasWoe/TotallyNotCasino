import React from 'react';
import './HiddenMessenger.css';
import arrow from '../../sources/arrowLeft.svg';
import chat from '../../sources/chat.svg';

const HiddenMessenger = () => {
  return (
    <div className="hidden-messenger">
      <btn>
        <img src={arrow} alt="" />
        <img src={chat} alt="" />
      </btn>
    </div>
  );
};
export default HiddenMessenger;
