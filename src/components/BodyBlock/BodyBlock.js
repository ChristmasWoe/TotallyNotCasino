import React from 'react';
import Main from '../Main/Main';
import Messenger from '../Messenger/Messenger';
import HiddenMessenger from '../HiddenMessenger/HiddenMessenger';

const BodyBlock = () => {
  return (
    <div className="body-block">
      <Main />
      <Messenger />
      <HiddenMessenger />
    </div>
  );
};
export default BodyBlock;
