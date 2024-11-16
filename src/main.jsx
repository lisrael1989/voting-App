// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/main.css';
import App from './App.jsx';

import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
