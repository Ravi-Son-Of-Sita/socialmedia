import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'include-media/dist/_include-media.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/login';
import HomePage from './pages/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
