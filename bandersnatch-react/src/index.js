import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuestionsIndex from './pages/QuestionsIndex';
import Finalcard from './pages/finalcard/Finalcard';

const rootElement =  document.getElementById('root');
render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path='/' element= {<App /> } />
        <Route path='final-page' element= {<Finalcard /> } />
        <Route path='questions' element= {<QuestionsIndex /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function