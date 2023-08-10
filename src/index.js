import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { CombineProvider } from './context/CombineContext';


ReactDOM.render(
  <CombineProvider>
    <App />
  </CombineProvider>,
  document.getElementById('root')
);



