import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import BodyBlock from '../components/BodyBlock/BodyBlock';
import ct from '../sources/ct.svg';
import rebel from '../sources/rebel.svg';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import DepositPage from '../components/DepositPage/DepositPage';
import WithdrawPage from '../components/WithdrawBlock/WithdrawPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <img className="ct" src={ct} alt="" />
        <img className="rebel" src={rebel} alt="" />
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<BodyBlock />} />
            <Route path="withdraw" element={<WithdrawPage />} />
            <Route path="deposit" element={<DepositPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
