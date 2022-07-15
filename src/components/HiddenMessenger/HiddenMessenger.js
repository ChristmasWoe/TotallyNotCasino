import React from 'react';
import './HiddenMessenger.css';
import arrow from '../../sources/arrowLeft.svg';
import chat from '../../sources/chat.svg';

const HiddenMessenger = ({ ...rootDOMAttributes }) => {
  return (
    <div {...rootDOMAttributes} className="hidden-messenger">
      <img className="hidden-messenger-arrow" src={arrow} alt="" />

      <img className="hidden-messenger-chat" src={chat} alt="" />
    </div>
  );
};
export default HiddenMessenger;
