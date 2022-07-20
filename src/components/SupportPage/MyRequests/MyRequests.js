import React from 'react';
import './MyRequests.css';

const MyRequests = () => {
  const title = 'Мои обращения';
  const requests = [
    '357562 обращение',
    '357562 обращение',
    '357562 обращение',
    '357562 обращение',
    '357562 обращение',
  ];
  const renderedRequests = requests.map((request, i) => {
    return (
      <div className="my-request-box">
        <div key={i} className="my-request">
          {request}
        </div>
      </div>
    );
  });
  return (
    <div className="my-requests">
      <div className="my-requests-title">{title}</div>
      <div className="my-requests-block">{renderedRequests}</div>
    </div>
  );
};
export default MyRequests;
