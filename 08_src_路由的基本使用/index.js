// 引入React核心库
import React from 'react';
// 引入React DOM
import ReactDOM from 'react-dom';
// BrowserRouter
import { HashRouter } from 'react-router-dom';
// 引入App
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
