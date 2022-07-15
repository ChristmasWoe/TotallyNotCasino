import React from 'react';
import Message from './Message';
import chat from '../../sources/chat.svg';
import arrow from '../../sources/arrow.svg';
import sendMessage from '../../sources/sendMessage.svg';

const Messenger = () => {
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
        <img src={chat} alt="" />
        <div>{online}</div>
        <img src={arrow} alt="" />
      </div>
      <div className="messenger-block">
        {renderedMessages}
        <input></input>
        <button>
          <img src={sendMessage} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Messenger;
