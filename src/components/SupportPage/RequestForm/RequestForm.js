import React from 'react';
import './RequestForm.css';

const RequestForm = () => {
  const topLine =
    'Опишите суть вашего обращения, чем подробнее будет описание тем быстрее вам смогут помочь';
  const bottomLine = 'После отправки обращения вы попадете в чат к специалисту';
  return (
    <div className="request-form">
      <div className="request-form-top-line">{topLine}</div>
      <input className="request-form-theme" placeholder="Тема" />
      <textarea className="request-form-content" placeholder="Обращение" />
      <div className="request-form-bottom-line">{bottomLine}</div>
      <button>Отправить обращение</button>
    </div>
  );
};
export default RequestForm;
