import React from 'react';
import './Message.css';
import avatar from '../../sources/winnerAvatar.svg';

const Message = ({ name, content }) => {
  return (
    <div className="message">
      <img src={avatar} alt="" />
      <div className="message-text-block">
        <div className="message-name">{name}</div>
        <div className="message-content">{content}</div>
      </div>
    </div>
  );
};
export default Message;
