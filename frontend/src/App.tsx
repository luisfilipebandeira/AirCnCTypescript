import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes'
import GlobalStyle from './styles/global';


const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
)

export default App;
