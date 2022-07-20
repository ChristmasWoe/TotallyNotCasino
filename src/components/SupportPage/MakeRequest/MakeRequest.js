import React from 'react';
import './MakeRequest.css';

const MakeRequest = () => {
  const lineMakeRequest =
    'Создайте обращение и опишите вашу проблему, наши специалисты постараются вам помочь в короткий срок';
  const btnText = 'Создать обращение';
  const bottomLine = 'Мы с вами на связи 24 часа в сутки';
  return (
    <div className="make-request">
      <div className="make-request-top-paragraph">{lineMakeRequest}</div>
      <button>{btnText}</button>
      <div className="make-request-bottom-line">{bottomLine}</div>
    </div>
  );
};
export default MakeRequest;
