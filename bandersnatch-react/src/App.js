import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import MainNavigation from './components/layout/MainNavigation';
import Home from './pages/Home';
import QuestionsIndex from './pages/QuestionsIndex';
//import Card from './pages/card/Card';
import Finalcard from './pages/finalcard/Finalcard';

function App() {
  return (
    <div className="App">
      <h1>Bandersnatch Choose Your Own Adventure Game!</h1>
      <nav>
        <Link to="/questions">List of Questions</Link> |{" "}
        <Link to="/final-page">Final Question</Link>
      </nav>
      <MainNavigation />
    </div>
  );
}

function Questions() {
  return (
    <div>
        <h1>
          Questions
          <nav>
            <Link to="questions">Questions</Link>
          </nav>
        </h1>

      <Outlet />
    </div>
  )
}
export default App;