import React from 'react';
import './SupportMessage.css';

const SupportMessage = ({ avatar, author, content }) => {
  return (
    <div className="support-message">
      <img src={avatar} alt="" />
      <div className="support-message-author-content">
        <div className="support-message-author">{author}</div>
        <div className="support-message-content-box">
          <div className="support-message-content">{content}</div>
        </div>
      </div>
    </div>
  );
};
export default SupportMessage;
