import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals(console.log);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// CLS (Cumulative Layout Shift): deve ser menor que 0.1
// FID (First Input Delay): deve ser menor que 100ms
// FCP (First Contentful Paint): deve ser menor que 1.8 segundos
// LCP (Largest Contentful Paint): deve ser menor que 2.5 segundos
// TTFB (Time to First Byte): deve ser menor que 600 ms