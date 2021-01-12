import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu'

ReactDOM.render(
  <Router>
    <Menu />
    <App />
  </Router>,
  document.getElementById('root')
  
);

registerServiceWorker();