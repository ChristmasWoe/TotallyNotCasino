import React, { useState } from 'react';
import Message from './Message';
import chat from '../../sources/chat.svg';
import arrow from '../../sources/arrow.svg';
import sendMessage from '../../sources/sendMessage.svg';
import './Messenger.css';

const Messenger = ({ ...rootDOMAttributes }) => {
  const [inputValue, setInputValue] = useState('Введите текст сообщения...');

  const online = `Онлайн: ${26}`;
  const messages = [
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
    {
      name: 'Nickname',
      content: 'Тест тест тест тест тест тест тест тест тест',
    },
  ];
  const renderedMessages = messages.map((message, i) => {
    return <Message key={i} name={message.name} content={message.content} />;
  });

  return (
    <div className="messenger">
      <div className="messenger-header">
        <img className="messenger-chat-icon" src={chat} alt="" />
        <div className="messenger-online">{online}</div>
        <img
          {...rootDOMAttributes}
          className="messenger-arrow-right"
          src={arrow}
          alt=""
        />
      </div>
      <div className="messenger-header-line"></div>
      <div className="messenger-block">
        <div className="messages-block">{renderedMessages}</div>
        <form className="messenger-block-input">
          <input
            type="text"
            placeholder={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>
            <img src={sendMessage} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Messenger;
