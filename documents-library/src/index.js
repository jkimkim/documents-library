import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the top navigation bar
const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the main content

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
