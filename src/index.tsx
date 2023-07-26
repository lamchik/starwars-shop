import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from "./store";
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import './index.css';
import {Provider} from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware]),
  devTools: process.env.NODE_ENV !== 'production',
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
