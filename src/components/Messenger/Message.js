import React from 'react';
import './Message.css';
import avatar from '../../sources/winnerAvatar.svg';

const Message = ({ name, content }) => {
  return (
    <div className="message">
      <img src={avatar} alt="" />
      <div>{name}</div>
      <div>{content}</div>
    </div>
  );
};
export default Message;
