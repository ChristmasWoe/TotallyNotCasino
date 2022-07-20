import React from 'react';
import './SupportChat.css';
import supportAvatar from '../../../sources/supportAvatar.png';
import userAvatar from '../../../sources/userAvatar.png';
import SupportMessage from './SupportMessage/SupportMessage';

const SupportChat = () => {
  const inputPlaceholder = 'Сообщение';
  const supportMessages = [
    {
      avatar: supportAvatar,
      author: 'Агент поддержки #3',
      content: 'Здравствуйте! прочитали ваше обращение, сейчас вам поможем',
    },
    {
      avatar: userAvatar,
      author: 'ISSAY',
      content: 'Тест текста Тест текста Тест текста Тест текста',
    },
    {
      avatar: supportAvatar,
      author: 'Агент поддержки #3',
      content: 'Здравствуйте! прочитали ваше обращение, сейчас вам поможем',
    },
  ];
  const renderedSupportMessages = supportMessages.map((message, i) => {
    return (
      <SupportMessage
        key={i}
        avatar={message.avatar}
        author={message.author}
        content={message.content}
      />
    );
  });

  return (
    <div className="support-chat">
      <div className="support-chat-messages-block">
        {renderedSupportMessages}
      </div>
      <div className="support-chat-input">
        <img src={userAvatar} alt="" />
        <input placeholder={inputPlaceholder} />
      </div>
    </div>
  );
};
export default SupportChat;
