import React from 'react';
import './CheckHonestry.css';

const CheckHonestry = () => {
  const checkHonestry = {
    title: 'Проверить на честность',
    link: 'https://www.random.org/',
  };
  return (
    <div className="check-honestry">
      <div className="check-honestry-title">{checkHonestry.title}</div>
      <div className="check-honestry-link">{checkHonestry.link}</div>
    </div>
  );
};
export default CheckHonestry;
