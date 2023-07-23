import React from 'react';

import './App.css';
import './assets/font/Inter.css'

import {Header} from "./components/Header/Header";
import {CardsList} from "./components/CardsList/CardsList";


function App() {
  return (
    <div className="App">
      <Header/>
      <CardsList/>
    </div>
  );
}

export default App;
