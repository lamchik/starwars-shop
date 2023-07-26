import React from 'react';
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom";

import './App.css';
import './assets/font/Inter.css'

import {MainPage} from "./pages/MainPage/MainPage";
import {ShoppingCartPage} from "./pages/ShoppingCartPage/ShoppingCartPage";
import {Header} from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/cart" element={<ShoppingCartPage />}/>
      </Routes>
    </>
  );
}

export default App;
