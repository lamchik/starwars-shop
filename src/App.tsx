import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import './assets/font/Inter.css'

import {MainPage} from "./pages/MainPage/MainPage";
import {ShoppingCartPage} from "./pages/ShoppingCartPage/ShoppingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "/cart",
    element: <ShoppingCartPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
