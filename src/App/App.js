import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import BodyBlock from '../components/BodyBlock/BodyBlock';
import ct from '../sources/ct.svg';
import rebel from '../sources/rebel.svg';

const App = () => {
  return (
    <div>
      <img className="ct" src={ct} alt="" />
      <img className="rebel" src={rebel} alt="" />
      <div className="container">
        <Header />
        <BodyBlock />
      </div>
    </div>
  );
};

export default App;
