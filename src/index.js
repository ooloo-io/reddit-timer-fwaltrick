import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const Root = () => (
  <Router>
    <Normalize />
    <App />
  </Router>
);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root />, document.getElementById('root'));
