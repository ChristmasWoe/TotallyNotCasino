import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import BodyBlock from '../components/BodyBlock/BodyBlock';
import ct from '../sources/ct.svg';
import rebel from '../sources/rebel.svg';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import DepositPage from '../components/DepositPage/DepositPage';
import WithdrawPage from '../components/WithdrawBlock/WithdrawPage';

const App = () => {
  return (
    <div>
      <img className="ct" src={ct} alt="" />
      <img className="rebel" src={rebel} alt="" />
      <div className="container">
        <Header />
        <BodyBlock />
        {/* <WithdrawPage /> */}
      </div>
    </div>
  );
};

export default App;
