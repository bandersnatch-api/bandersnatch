import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
//import Card from './pages/card/Card';
import Finalcard from './pages/finalcard/Finalcard';

function App() {
  return (
    <div className="App">
      <h1>Labyrinth Choose Your Own Adventure Game!</h1>
      <h2>Only your knowledge of Ruby can help you escape…</h2>
      <h2>Enter if you dare…</h2>
      <nav>
        <Link to="/questions">List of Questions</Link> {" "}
       {/* <Link to="/final-page">Final Question</Link> */}
      </nav>
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