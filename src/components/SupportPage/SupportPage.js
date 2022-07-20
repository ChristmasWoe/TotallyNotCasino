import React from 'react';
import './SupportPage.css';
import MakeRequest from './MakeRequest/MakeRequest';
import MyRequests from './MyRequests/MyRequests';
import RequestForm from './RequestForm/RequestForm';
import SupportChat from './SupportChat/SupportChat';

const SupportPage = () => {
  const title = 'Поддержка';
  return (
    <div className="support-page">
      <h3>{title}</h3>
      <MakeRequest />
      {/* <RequestForm /> */}
      {/* <SupportChat /> */}
      <MyRequests />
    </div>
  );
};
export default SupportPage;
